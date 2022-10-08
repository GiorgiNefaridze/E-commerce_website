import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarouselWrapper = styled(Swiper)`
  width: 100%;
  height: 500px;
  background: rgb(250, 250, 250);
  position: relative;
  padding: 20px;
  cursor: grab;

  .swiper-wrapper {
    align-items: flex-end;
  }

  .swiper-slide {
    height: 81%;
  }

  .swiper-button-next {
    position: absolute;
    top: 10%;
    right: 3%;

    &:after {
      font-size: 30px;
    }
  }

  .swiper-button-prev {
    position: absolute;
    top: 10%;
    left: 3%;

    &:after {
      font-size: 30px;
    }
  }
`;
