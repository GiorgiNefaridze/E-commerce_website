import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
