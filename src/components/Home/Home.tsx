import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Carousel from "../Carousel/Carousel";

import { AllProducts } from "../../data/database";
import { IProducts } from "../../interfaces";

import { HomeWrapper, CarrouselWrapper, HeadingWrapper } from "./Home.style";

const Home: React.FC = () => {
  const [allSaledProduct, setAllSaledProduct] = useState<IProducts[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    setAllSaledProduct(
      AllProducts.map((product) => ({
        ...product,
        discountPrice: Math.floor((product.price * 20) / 100),
      }))
    );
  }, [AllProducts]);

  return (
    <HomeWrapper>
      <CarrouselWrapper>
        <HeadingWrapper>
          <span className="material-symbols-outlined">percent</span>
          <h1>{t("sale")}</h1>
        </HeadingWrapper>
        <Carousel content={allSaledProduct} />
      </CarrouselWrapper>
    </HomeWrapper>
  );
};

export default Home;
