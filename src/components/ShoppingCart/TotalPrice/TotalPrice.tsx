import React from "react";
import { useTranslation } from "react-i18next";

import { TotalPriceWrapper } from "./TotalPrice.style";

const TotalPrice = () => {
  const { t } = useTranslation();

  return (
    <TotalPriceWrapper>
      <h1>{t("total") + " : "}</h1>
    </TotalPriceWrapper>
  );
};

export default TotalPrice;
