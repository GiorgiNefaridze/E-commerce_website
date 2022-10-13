import styled from "styled-components";

interface Props {
  isDiscount: boolean;
}

export const ProductWrapper = styled.div`
  width: 80%;
  height: calc(100vh - 300px);
  margin: auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 60px 20px 0px;
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
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  border-radius: 10px;
  padding: 15px;
  border: 2px solid #f5f5f5;

  label {
    display: flex;
    align-items: center;
    gap: 0 10px;
    cursor: pointer;

    &:last-child {
      width: 100%;
      height: 45px;
      justify-content: space-between;

      span {
        padding: 10px;
        height: 100%;
        font-size: 20px;
        border: 2px solid gray;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
          background-color: rgba(0, 0, 0, 0.2);
          transition: 0.2s ease-out;
        }
      }

      button {
        width: 100%;
        height: 100%;
        letter-spacing: 2px;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        background-color: red;
        font-size: 18px;
        border: none;
        cursor: pointer;

        :hover {
          background-color: #d40404;
          transition: 0.2s ease-out;
        }
      }
    }
  }
`;

export const Price = styled.p`
  color: red;
  font-size: 19px;
  font-weight: bold;
`;

export const DiscountPrice = styled.p<Props | HTMLElement>`
  color: ${({ isDiscount }) => (isDiscount ? "black" : "gray")};
  text-decoration: ${({ isDiscount }) =>
    isDiscount ? "none" : "line-through"};
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

  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    gap: 0 10px;
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
