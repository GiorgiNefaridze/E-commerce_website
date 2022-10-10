import React from "react";
import { useNavigate } from "react-router-dom";

import ProductSlider from "./ProductSlider/ProductSlider";

import { IProducts } from "../../../interfaces";

import { ProductWrapper, PriceWrapper } from "./Product.style";

interface Props {
  item: IProducts;
}

const Product: React.FC<Props> = ({ item }) => {
  const { listImg, title, price, discountPrice, id } = item;

  const navigate = useNavigate();

  const productDetails = () => {
    navigate(`product/${id}`);
  };

  return (
    <ProductWrapper onClick={productDetails}>
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
