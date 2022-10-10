import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AllProducts } from "../../data/database";

import { IProducts } from "../../interfaces";

const ProductDetail: React.FC = () => {
  const [product, setProduct] = useState<IProducts>();

  const { id } = useParams();

  useEffect(() => {
    setProduct(AllProducts.find((product) => product.id === id));
  }, [AllProducts, id]);

  return (
    <div>
      <h1>{product?.title}</h1>
    </div>
  );
};

export default ProductDetail;
