import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { IProducts } from "../../interfaces";

import Carousel from "../Carousel/Carousel";
import Loader from "../Loader/Loader";

import { HomeWrapper, CarrouselWrapper, HeadingWrapper } from "./Home.style";

const Home: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [saledProduct, setSaledProduct] = useState<IProducts[]>([]);
  const [suggestedProduct, setSuggestedProduct] = useState<IProducts[]>([]);

  const { t } = useTranslation();

  useEffect(() => {
    // const getSuggestedProducts = async () => {
    //   const { data } = await Products.get("/products");
    //   setSuggestedProduct(data);
    // };
    // const getSaledProducts = async () => {
    //   const { data } = await Products.get("/products");
    //   setSaledProduct(data?.filter((product: IProducts) => product.saled));
    // };
    // getSuggestedProducts();
    // getSaledProducts();
    // setLoading(false);
  }, []);

  return (
    <HomeWrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <CarrouselWrapper>
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
          </CarrouselWrapper> */}
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
