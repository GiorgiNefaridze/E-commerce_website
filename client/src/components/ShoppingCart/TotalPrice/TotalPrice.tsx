import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { IProducts } from "../../../interfaces";

import { TotalPriceWrapper } from "./TotalPrice.style";

const TotalPrice: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    // const getTotalPrice = async () => {
    //   const { data } = await Products("/get_product_from_cart");
    //   setTotalPrice(
    //     Math.floor(data?.reduce((acc, item: IProducts) => acc + item.price, 0))
    //   );
    // };

    // getTotalPrice();
  }, []);

  return (
    <TotalPriceWrapper>
      <h1>{t("total") + " : " + totalPrice}</h1>
    </TotalPriceWrapper>
  );
};

export default TotalPrice;
