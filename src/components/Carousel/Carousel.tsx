import React from "react";
import { Navigation } from "swiper";
import { SwiperSlide } from "swiper/react";

import Product from "./Product/Product";
import { IProducts } from "../../interfaces";

import { CarouselWrapper } from "./Carousel.style";

import "swiper/css";
import "swiper/css/navigation";

interface Props {
  content: IProducts[];
}

const Carousel: React.FC<Props> = ({ content }) => {
  return (
    <CarouselWrapper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      className="mySwiper"
    >
      {content.map((item) => (
        <SwiperSlide key={item.id}>
          <Product item={item} />
        </SwiperSlide>
      ))}
    </CarouselWrapper>
  );
};

export default Carousel;
