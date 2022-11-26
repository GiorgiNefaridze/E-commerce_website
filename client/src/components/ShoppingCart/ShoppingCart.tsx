import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import TotalPrice from "./TotalPrice/TotalPrice";
import Loader from "../Loader/Loader";

import { useGetCartProducts } from "../../hooks/useGetCartProducts";
import { AuthContext } from "../../context/authContext";
import { CartProductsContext } from "../../context/cartProductsContext";

import { IProducts } from "../../interfaces";

import Profile from "../../images/Profile.png";
import { ShoppingCartWrapper, Cart, LoginWrapper } from "./ShoppingCart.style";

interface Props {
  setShowShoppingCart: React.Dispatch<React.SetStateAction<boolean>>;
  shoppingCartRef: React.MutableRefObject<HTMLDivElement | null>;
}

const ShoppingCart: React.FC<Props> = ({
  setShowShoppingCart,
  shoppingCartRef,
}) => {
  const cartRef = useRef<HTMLDivElement | null>(null);

  const { auth } = AuthContext();
  const { products } = CartProductsContext();
  const { getCartProducts, loading } = useGetCartProducts();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      if (auth?.authStatus) {
        await getCartProducts(auth?.id);
      }
    })();
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
      ) : !auth?.authStatus ? (
        <LoginWrapper>
          <img src={Profile} />
          <h1>{t("must log in")}</h1>
        </LoginWrapper>
      ) : (
        <>
          <Cart>
            {products?.map((product: IProducts) => (
              <ShoppingCartItem key={product._id} product={product} />
            ))}
          </Cart>
          <TotalPrice />
        </>
      )}
    </ShoppingCartWrapper>
  );
};

export default ShoppingCart;
