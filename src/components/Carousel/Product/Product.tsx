import React from "react";

import ProductSlider from "./ProductSlider/ProductSlider";

import { IProducts } from "../../../interfaces";

import { ProductWrapper, PriceWrapper } from "./Product.style";

interface Props {
  item: IProducts;
}

const Product: React.FC<Props> = ({ item }) => {
  return (
    <ProductWrapper>
      <ProductSlider imgList={item.listImg} />
      <h2>{item.title}</h2>
      <PriceWrapper>
        <p>{item.price * 30 / 100}$</p>
        <span>{item.price}$</span>
      </PriceWrapper>
    </ProductWrapper>
  );
};

export default Product;
