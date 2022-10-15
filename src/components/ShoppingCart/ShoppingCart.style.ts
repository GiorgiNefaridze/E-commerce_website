import styled from "styled-components";

export const ShoppingCartWrapper = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 400px;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  gap: 20px 0;
  padding: 30px;

  z-index: 20;
`;

export const ProductCartWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;

  img {
    object-fit: contain;
    width: 30%;
    height: 100%;
  }

  div {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;

    span {
      font-size: 20px;
      font-weight: bold;
    }

    div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;

      input {
        width: 40%;
      }
    }
  }
`;
