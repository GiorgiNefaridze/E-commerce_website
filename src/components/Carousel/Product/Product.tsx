import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ProductSlider from "./ProductSlider/ProductSlider";

import { IProducts } from "../../../interfaces";

import { ProductWrapper, PriceWrapper } from "./Product.style";

interface Props {
  item: IProducts;
}

const Product: React.FC<Props> = ({ item }) => {
  const { listImg, title, price, discountPrice } = item;

  const [btnsRef, setBtnsRef] = useState({});

  const navigate = useNavigate();

  const productDetails = (e: React.MouseEvent) => {
    const { target } = e;

    if (
      target === btnsRef?.NextRef?.current ||
      target === btnsRef?.PrevRef?.current
    ) {
      return;
    }

    navigate(`/product`, {state: {product: item}});
  };

  return (
    <ProductWrapper onClick={productDetails}>
      <ProductSlider setBtnsRef={setBtnsRef} imgList={listImg} />
      <h2>{title}</h2>
      <PriceWrapper isDiscounted={discountPrice !== undefined}>
        {discountPrice && <p>{discountPrice}$</p>}
        <span>{price}$</span>
      </PriceWrapper>
    </ProductWrapper>
  );
};

export default Product;
