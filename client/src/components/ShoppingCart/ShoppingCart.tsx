import React, { useEffect, useState, useRef } from "react";
import { onSnapshot, DocumentData, collection } from "firebase/firestore";

import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import Loader from "../Loader/Loader";

import { IProducts } from "../../interfaces";
import { auth, db } from "../../firebase-config";

import { ShoppingCartWrapper, Cart } from "./ShoppingCart.style";

interface Props {
  setShowShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCartRef: React.MutableRefObject<HTMLDivElement | null>;
}

const COLLECTION = collection(db, "cart_Products");

const ShoppingCart: React.FC<Props> = ({
  setShowShoppingCart,
  shoppingCartRef,
}) => {
  const [cartProduct, setCartProduct] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tprice, setTprice] = useState<boolean>(false);

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

    if (
      !cartRef?.current?.contains(target) &&
      !shoppingCartRef?.current?.contains(target)
    ) {
      setShowShoppingCart(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <ShoppingCartWrapper ref={cartRef}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Cart>
            {cartProduct?.map((product: IProducts) => (
              <ShoppingCartItem key={product.id} product={product} tprice={tprice} />
            ))}
          </Cart>
          <TotalPrice setTprice={setTprice} />
        </>
      )}
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
