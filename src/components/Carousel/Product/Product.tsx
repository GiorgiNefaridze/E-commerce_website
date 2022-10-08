import React from "react";

import ProductSlider from "./ProductSlider/ProductSlider";

import { IProducts } from "../../../interfaces";

import { ProductWrapper, PriceWrapper } from "./Product.style";

interface Props {
  item: IProducts;
}

const Product: React.FC<Props> = ({ item }) => {
  const { listImg, title, price, discountPrice } = item;

  return (
    <ProductWrapper>
      <ProductSlider imgList={listImg} />
      <h2>{title}</h2>
      <PriceWrapper isDiscounted={discountPrice !== undefined}>
        {discountPrice && <p>{discountPrice}$</p>}
        <span>{price}$</span>
      </PriceWrapper>
    </ProductWrapper>
  );
};

export default Product;
