import React, { useState, useEffect } from "react";

import Carousel from "../Carousel/Carousel";

import { AllProducts } from "../../data/database";
import { IProducts } from "../../interfaces";

const Home: React.FC = () => {
  const [allSaledProduct, setAllSaledProduct] = useState<IProducts[]>([]);

  useEffect(() => {
    setAllSaledProduct(AllProducts.filter((product) => product.price > 850));
  }, []);

  return (
    <div>
      <h1></h1>
      <Carousel content={allSaledProduct} />
    </div>
  );
};

export default Home;
