import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PriceWrapper = styled.div`
  display: flex;
  span {
    opacity: 0.8;
    text-decoration: line-through;
  }
`;
