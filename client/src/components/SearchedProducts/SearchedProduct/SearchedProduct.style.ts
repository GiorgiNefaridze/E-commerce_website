import styled from "styled-components";

export const SearchedProductWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 8px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px 0;
    padding: 10px;
    span {
      font-size: 11px;
      font-weight: bold;
    }
  }

  p {
    width: 22%;
    font-size: 17px;
  }
`;
