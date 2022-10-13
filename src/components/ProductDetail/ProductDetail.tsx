import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IsAuthContext } from "../../context/isAuth";
import ProductDetailSlider from "./ProductDetailSlider/ProductDetailSlider";
import SignIn from "../SignIn/SignIn";

import InStock from "../../images/in-stock.svg";
import IsNotInStock from "../../images/not-in-stock.svg";

import { IProducts } from "../../interfaces";

import {
  ProductWrapper,
  DetailsWrapper,
  Content,
  Checkout,
  Slider,
  DetailsWrapperInner,
  DetailsWrapperHeader,
  DiscountPrice,
  Price,
} from "./ProductDetail.style";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<IProducts>();
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);

  const signInRef = useRef(null);

  const { isAuthStatus } = IsAuthContext();

  const { t } = useTranslation();
  const { state } = useLocation();

  useEffect(() => {
    setProduct(state?.product);
  }, [state]);

  const addToCart = () => {
    if (!isAuthStatus) {
      setShowSignInPopUp(true);
    }
  };

  return (
    <ProductWrapper>
      <Content>
        <Slider>
          <ProductDetailSlider images={product?.listImg} />
        </Slider>
        <DetailsWrapper>
          <DetailsWrapperHeader>
            <p>{product?.brand}</p>
            <h1>{product?.title}</h1>
            {product?.inStock ? (
              <div>
                <img src={InStock} />
                <p>{t("in stock")}</p>
              </div>
            ) : (
              <div>
                <img src={IsNotInStock} />
                <p>{t("is not in stock")}</p>
              </div>
            )}
          </DetailsWrapperHeader>
          <DetailsWrapperInner>
            <ul>
              {product &&
                Object.keys(product?.spec).map((key, idx) => (
                  <li key={idx}>
                    <span>{key}</span>
                    <div></div>
                    <span>{product?.spec[key]}</span>
                  </li>
                ))}
            </ul>
          </DetailsWrapperInner>
        </DetailsWrapper>
      </Content>
      <Checkout>
        {product?.discountPrice && (
          <DiscountPrice isDiscount={product?.discountPrice === undefined}>
            {product?.price}$
          </DiscountPrice>
        )}
        {product?.discountPrice ? (
          <Price>{product?.discountPrice}$</Price>
        ) : (
          <Price>{product?.price}$</Price>
        )}
        <label>
          <span className="material-symbols-outlined">visibility</span>
          <p>{t("price control")}</p>
        </label>
        <label>
          <span className="material-symbols-outlined">lock</span>{" "}
          <p>{t("price lock")}</p>
        </label>
        <label>
          <span className="material-symbols-outlined">local_mall</span>
          <button ref={signInRef} onClick={addToCart}>
            {t("buy")}
          </button>
        </label>
      </Checkout>
      {showSignInPopUp && (
        <SignIn setShowSignInPopUp={setShowSignInPopUp} signInRef={signInRef} />
      )}
    </ProductWrapper>
  );
};

export default ProductDetail;
