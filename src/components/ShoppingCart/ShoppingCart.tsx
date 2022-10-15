import React, { useEffect, useState, useRef } from "react";
import { onSnapshot, DocumentData } from "firebase/firestore";

import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";

import { COLLECTION } from "../ProductDetail/ProductDetail";
import { IProducts } from "../../interfaces";
import { auth } from "../../firebase-config";

import { ShoppingCartWrapper } from "./ShoppingCart.style";

interface Props {
  setShowShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCartRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ShoppingCart: React.FC<Props> = ({
  setShowShoppingCart,
  shoppingCartRef,
}) => {
  const [cartProduct, setCartProduct] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onSnapshot(COLLECTION, (snapshot) => {
      setCartProduct(
        snapshot.docs
          .filter((doc) => doc.data().userId === auth?.currentUser?.uid)
          .map((doc) => doc.data())
      );
      setLoading(false);
    });
  }, [COLLECTION, auth]);

  const handleOutsideClick = (e: any): void => {
    const { target } = e;

    // if (
    //   !cartRef?.current?.contains(target) &&
    //   !shoppingCartRef?.current?.contains(target)
    // ) {
    //   setShowShoppingCart(false);
    // }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <ShoppingCartWrapper ref={cartRef}>
      {cartProduct?.map((product: IProducts) => (
        <ShoppingCartItem key={product.id} product={product} />
      ))}
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
