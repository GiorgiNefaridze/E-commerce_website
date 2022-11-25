import styled from "styled-components";

export const Input = styled.div`
  width: 40%;
  position: relative;

  z-index: 50;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    padding: 10px 15px;
    border: none;
    font-size: 17px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    &:focus {
      box-shadow: 0px 0px 0px 100000px rgba(0, 0, 0, 0.2);
      transition: All 0.2s ease-in-out;
    }
  }
`;
