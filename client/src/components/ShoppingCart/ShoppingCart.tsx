import React, { useEffect, useState, useRef } from "react";

import { Products } from "../../api/Products";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import Loader from "../Loader/Loader";

import { IProducts } from "../../interfaces";
import { auth } from "../../firebase-config";

import { ShoppingCartWrapper, Cart } from "./ShoppingCart.style";

interface Props {
  setShowShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCartRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ShoppingCart: React.FC<Props> = ({
  setShowShoppingCart,
  shoppingCartRef,
}) => {
  const [cartProduct, setCartProduct] = useState<IProducts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const cartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const getCartProducts = async () => {
      const { data } = await Products.get("/get_product_from_cart");
      setCartProduct(
        data?.filter(
          (product: IProducts) => product?.userId === auth?.currentUser?.uid
        )
      );

      setLoading(false);
    };

    getCartProducts();
  }, [auth]);

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
              <ShoppingCartItem key={product._id} product={product} />
            ))}
          </Cart>
          {/* <TotalPrice } /> */}
        </>
      )}
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
