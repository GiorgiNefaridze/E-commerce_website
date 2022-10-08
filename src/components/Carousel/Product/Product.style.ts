import styled from "styled-components";

interface Props {
  isDiscounted: boolean;
}

export const ProductWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 8px;
  border: 3px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h2 {
    text-align: center;
  }
`;

export const PriceWrapper = styled.div<Props | HTMLElement>`
  display: flex;
  align-items: center;
  gap: 0 15px;

  p {
    color: red;
  }

  span {
    font-size: ${({ isDiscounted }) => (isDiscounted ? "16px" : "18px")};
    opacity: ${({ isDiscounted }) => (isDiscounted ? 0.8 : 1)};
    text-decoration: ${({ isDiscounted }) =>
      isDiscounted ? "line-through" : "none"};
  }
`;
