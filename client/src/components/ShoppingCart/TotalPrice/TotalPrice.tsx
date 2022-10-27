import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { collection, onSnapshot } from "firebase/firestore";

import { TotalPriceWrapper } from "./TotalPrice.style";
import { auth } from "../../../firebase-config";

interface Props {
  setTprice: React.Dispatch<React.SetStateAction<boolean>>;
}


const TotalPrice: React.FC<Props> = ({ setTprice }) => {
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    onSnapshot(COLLECTION, (snapshot) => {
      setTotalPrice(
        snapshot.docs
          .filter((doc) => doc.data().userId === auth?.currentUser?.uid)
          .map((item) => item.data())
          .reduce((acc, item) => acc + item.price, 0)
      );
    });
  }, []);

  const toggler = () => {
    setTprice((prev) => !prev);
  };

  return (
    <TotalPriceWrapper>
      <h1>{t("total") + " : " + totalPrice}</h1>

      <button onClick={toggler}>click show total price</button>
      <p></p>
    </TotalPriceWrapper>
  );
};

export default TotalPrice;
