import React, { useState } from "react";

import { SliderWrapper } from "./ProductSlider.style";

interface Props {
  imgList: string[];
}

const NEXT = "+";
const PREV = "-";

const ProductSlider: React.FC<Props> = ({ imgList }) => {
  const [imgInd, setImgInd] = useState<number>(0);

  const chnageSlide = (e: any) => {
    const { innerHTML } = e.target;

    if (innerHTML === NEXT) {
      setImgInd((prev) => prev + 1);

      if (imgInd === imgList.length - 1) {
        setImgInd(0);
      }
    }

    if (innerHTML === PREV) {
      setImgInd((prev) => prev - 1);

      if (imgInd === 0) {
        setImgInd(imgList.length - 1);
      }
    }
  };

  return (
    <SliderWrapper>
      <button onClick={chnageSlide}>{NEXT}</button>
      <img src={imgList[imgInd]} />
      <button onClick={chnageSlide}>{PREV}</button>
    </SliderWrapper>
  );
};

export default ProductSlider;
