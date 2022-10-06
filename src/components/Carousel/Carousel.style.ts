import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarouselWrapper = styled(Swiper)`
  width: 100%;
  height: 500px;
  background: white;
  position: relative;
  cursor: grab;

  .swiper-wrapper {
    align-items: flex-end;
  }

  .swiper-slide {
    height: 72%;
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
