import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 80%;
  height: calc(100vh - 300px);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Fira Sans";
`;

export const Content = styled.div`
  width: 65%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .swiper {
    width: 100%;
    height: 300px;
  }
`;

export const Slider = styled.div`
  width: 40%;
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px 0;
  background-color: white;
  padding: 20px;

  .mySwiper {
    height: 100px;
  }

  img {
    width: 100%;
    border: 2px solid #f5f5f5;
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
`;

export const Checkout = styled.div`
  width: 25%;
  /* height: 100%; */
  background-color: blue;
`;

export const DetailsWrapper = styled.div`
  width: 60%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px 0;
`;

export const DetailsWrapperHeader = styled.div`
  width: 100%;
  border-bottom: 2px solid #f5f5f5;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;

  img {
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const DetailsWrapperInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px 0;

    li {
      width: 100%;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        width: 70%;
        height: 1px;
        border: 1px solid #f5f5f5;
      }
    }
  }
`;

export const ReviewsWrapper = styled.div`
  width: 40%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px 0px;
  padding: 20px;

  img {
    width: 100%;
    height: 300px;
    border: 2px solid #f5f5f5;
    cursor: pointer;
  }
`;
