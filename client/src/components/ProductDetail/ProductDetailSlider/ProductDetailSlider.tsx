import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

import { Slide } from "../ProductDetail.style";

interface Props {
  images: string[] | undefined;
}

const ProductDetailSlider: React.FC<Props> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Slide>
      {/* <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images?.map((image, idx) => (
          <SwiperSlide key={idx}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper> */}
    </Slide>
  );
};

export default ProductDetailSlider;
