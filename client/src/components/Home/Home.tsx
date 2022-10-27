import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  onSnapshot,
  collection,
  DocumentData,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "../../firebase-config";
import { CalculatePercent } from "../../utils/CalculatePercent";
import Carousel from "../Carousel/Carousel";
import Loader from "../Loader/Loader";

import { SALE_IN_PERCENT } from "../../utils/CalculatePercent";

import { HomeWrapper, CarrouselWrapper, HeadingWrapper } from "./Home.style";

const COLLECTION = collection(db, "Products");

const Home: React.FC = () => {
  const [saledProduct, setSaledProduct] = useState<DocumentData>([]);
  const [suggestedProduct, setSuggestedProduct] = useState<DocumentData>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { t } = useTranslation();

  useEffect(() => {
    onSnapshot(COLLECTION, (snapshot) => {
      snapshot.docs
        .filter((doc) => doc.data().originPrice >= 1300)
        .map((item) =>
          updateDoc(doc(db, "Products", item.id), {
            ...item.data(),
            discountPrice: CalculatePercent(item.data().originPrice),
            saled: true,
          })
        );
    });
  }, [SALE_IN_PERCENT]);

  useEffect(() => {
    onSnapshot(COLLECTION, (snapshot) => {
      setSaledProduct(
        snapshot.docs.map((doc) => doc.data()).filter((doc) => doc.saled)
      );

      setSuggestedProduct(snapshot.docs.map((doc) => doc.data()));

      setLoading(false);
    });
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
