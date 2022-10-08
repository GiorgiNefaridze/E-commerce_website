import styled from "styled-components";

export const Input = styled.input`
  width: 40%;
  padding: 10px 15px;
  outline: none;
  border: none;
  font-size: 17px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  z-index: 10;

  &:focus {
    box-shadow: 0px 0px 0px 100000px rgba(0, 0, 0, 0.2);
    transition: All 0.2s ease-in-out;
  }
`;
