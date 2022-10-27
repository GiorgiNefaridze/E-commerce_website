import React, { useState, useEffect, useRef } from "react";

import { SliderWrapper } from "./ProductSlider.style";

interface Props {
  imgList: string[];
  setBtnsRef: React.Dispatch<React.SetStateAction<{}>>;
}

const NEXT = "+";
const PREV = "-";

const ProductSlider: React.FC<Props> = ({ imgList, setBtnsRef }) => {
  const [imgInd, setImgInd] = useState<number>(0);

  const NextRef = useRef<HTMLButtonElement | null>(null);
  const PrevRef = useRef<HTMLButtonElement | null>(null);

  const changeSlide = (e: any) => {
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

  useEffect(() => {
    setBtnsRef({ NextRef, PrevRef });
  }, [NextRef, PrevRef]);

  return (
    <SliderWrapper>
      <button ref={NextRef} onClick={changeSlide}>
        {NEXT}
      </button>
      <img src={imgList[imgInd]} />
      <button ref={PrevRef} onClick={changeSlide}>
        {PREV}
      </button>
    </SliderWrapper>
  );
};

export default ProductSlider;
