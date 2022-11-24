import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { AuthContext } from "../../../context/authContext";
import { CartProductsContext } from "../../../context/cartProductsContext";

import { IProducts } from "../../../interfaces";

import { TotalPriceWrapper } from "./TotalPrice.style";

const TotalPrice: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const { t } = useTranslation();
  const { auth } = AuthContext();
  const { products } = CartProductsContext();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/product/getAllProductFromCart",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userId: auth?.id }),
        }
      );

      const result: IProducts[] = await response.json();

      setTotalPrice(products.reduce((acc, item) => acc + item.price, 0));
      setLoading(false);
    })();
  }, [products]);

  return (
    <TotalPriceWrapper>
      <h1>
        {t("total") +
          " : " +
          (loading ? "..." : Math.floor(Number(totalPrice)) + " $")}
      </h1>
    </TotalPriceWrapper>
  );
};

export default TotalPrice;
