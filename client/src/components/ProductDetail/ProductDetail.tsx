import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Products } from "../../api/Products";

import ProductDetailSlider from "./ProductDetailSlider/ProductDetailSlider";
import SignIn from "../SignIn/SignIn";

import { IsAuthContext } from "../../context/isAuth";
import { auth } from "../../firebase-config";

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
  BuyButtonWrapper,
} from "./ProductDetail.style";

import Loader from "../Loader/Loader";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState({});
  const [showSignInPopUp, setShowSignInPopUp] = useState<boolean>(false);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const signInRef = useRef(null);

  const { id } = useParams();

  const { isAuthStatus } = IsAuthContext();
  const { t } = useTranslation();

  useEffect(() => {
    const getProductDetails = async () => {
      const { data } = await Products.get(`/product_detail/${id}`);
      setProduct(data);

      setLoading(false);
    };

    getProductDetails();
  }, [id]);

  const addToCart = () => {
    if (!isAuthStatus) {
      setShowSignInPopUp(true);
      return;
    }

    if (addedToCart) {
      return;
    }
  };

  return (
    <ProductWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
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
            {product?.discountPrice ? (
              <DiscountPrice isDiscount={product?.discountPrice === undefined}>
                {product?.price}$
              </DiscountPrice>
            ) : null}
            {product?.discountPrice ? (
              <Price>{product?.discountPrice}$</Price>
            ) : (
              <Price>{product?.originPrice}$</Price>
            )}
            <label>
              <span className="material-symbols-outlined">visibility</span>
              <p>{t("price control")}</p>
            </label>
            <label>
              <span className="material-symbols-outlined">lock</span>
              <p>{t("price lock")}</p>
            </label>
            <label>
              <span className="material-symbols-outlined">local_mall</span>
              <BuyButtonWrapper
                added={addedToCart}
                ref={signInRef}
                onClick={addToCart}
              >
                {!addedToCart ? t("buy") : t("in the cart")}
              </BuyButtonWrapper>
            </label>
          </Checkout>
        </>
      )}

      {showSignInPopUp && (
        <SignIn setShowSignInPopUp={setShowSignInPopUp} signInRef={signInRef} />
      )}
    </ProductWrapper>
  );
};

export default ProductDetail;
