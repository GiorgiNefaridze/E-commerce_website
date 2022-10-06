import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarouselWrapper = styled(Swiper)`
  width: 80%;
  margin: auto;
  height: 500px;
  background: pink;
  position: relative;

  .swiper-wrapper {
    align-items: flex-end;
  }

  .swiper-slide {
    height: 85%;
  }

  .swiper-button-next {
    position: absolute;
    top: 0;
    right: 0;
  }

  .swiper-button-prev {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
