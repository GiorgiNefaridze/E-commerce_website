import styled from "styled-components";

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 6px;
  border: 2px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h2 {
    text-align: center;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0 15px;

  p {
    color: red;
  }

  span {
    font-size:13px;
    opacity: 0.8;
    text-decoration: line-through;
  }
`;
