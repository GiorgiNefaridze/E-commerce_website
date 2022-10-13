import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ProductDetailSlider from "./ProductDetailSlider/ProductDetailSlider";

import InStock from "../../images/in-stock.svg";

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

  const { t } = useTranslation();
  const { state } = useLocation();

  useEffect(() => {
    setProduct(state?.product);
  }, [state]);

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
            <img src={InStock} />
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
            {product?.discountPrice}$
          </DiscountPrice>
        )}
        <Price>{product?.price}$</Price>
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
          <button>{t("buy")}</button>
        </label>
      </Checkout>
    </ProductWrapper>
  );
};

export default ProductDetail;
