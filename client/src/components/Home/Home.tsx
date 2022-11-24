import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { IProducts } from "../../interfaces";

import Carousel from "../Carousel/Carousel";
import Loader from "../Loader/Loader";

import { HomeWrapper, CarrouselWrapper, HeadingWrapper } from "./Home.style";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [saledProduct, setSaledProduct] = useState<IProducts[]>([]);
  const [suggestedProduct, setSuggestedProduct] = useState<IProducts[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      setLoading(true);
      const fetchSuggestedProduct = await fetch(
        "http://localhost:5000/api/product/getProducts"
      );

      const resultOfSuggestedProduct = await fetchSuggestedProduct.json();

      setSuggestedProduct(resultOfSuggestedProduct);

      const fetchSaledProduct = await fetch(
        "http://localhost:5000/api/product/getSaledProducts"
      );
      const resultOfSaledProduct = await fetchSaledProduct.json();

      setSaledProduct(resultOfSaledProduct);
      setLoading(false);
    })();
  }, []);

  return (
    <HomeWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <CarrouselWrapper>
            <HeadingWrapper>
              <span className="material-symbols-outlined">percent</span>
              <h1>{t("sale")}</h1>
            </HeadingWrapper>
            <Carousel content={saledProduct} />
          </CarrouselWrapper>

          <CarrouselWrapper>
            <HeadingWrapper>
              <span className="material-symbols-outlined">
                local_fire_department
              </span>
              <h1>{t("offered")}</h1>
            </HeadingWrapper>
            <Carousel content={suggestedProduct} />
          </CarrouselWrapper>
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
