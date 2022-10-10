import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AllProducts } from "../../data/database";

import { IProducts } from "../../interfaces";

import {
  ProductWrapper,
  DetailsWrapper,
  ReviewsWrapper,
} from "./ProductDetail.style";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<IProducts>();

  const { id } = useParams();

  useEffect(() => {
    setProduct(AllProducts.find((product) => product.title === id));
  }, [AllProducts, id]);

  return (
    <ProductWrapper>
      <ReviewsWrapper></ReviewsWrapper>
      <DetailsWrapper>
        <h1>{product?.title}</h1>
      </DetailsWrapper>
    </ProductWrapper>
  );
};

export default ProductDetail;
