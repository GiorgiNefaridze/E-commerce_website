import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductDetailSlider from "./ProductDetailSlider/ProductDetailSlider";
import { AllProducts } from "../../data/database";

import InStock from "../../images/in-stock.svg";

import { IProducts } from "../../interfaces";

import {
  ProductWrapper,
  DetailsWrapper,
  ReviewsWrapper,
  Content,
  Checkout,
  Slider,
  DetailsWrapperInner,
  DetailsWrapperHeader,
} from "./ProductDetail.style";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<IProducts>();

  const { id } = useParams();

  useEffect(() => {
    setProduct(AllProducts.find((product) => product.id === id));
  }, [AllProducts, id]);

  return (
    <>
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
        <Checkout></Checkout>
      </ProductWrapper>
    </>
  );
};

export default ProductDetail;
