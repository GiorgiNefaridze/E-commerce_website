import styled from "styled-components";

interface Props {
  width: number | undefined;
}

export const LoaderWrapper = styled.div<Props | HTMLElement>`
  margin: auto;
  border: 10px solid #eaf0f6;
  border-radius: 50%;
  border-top: 10px solid #ff7a59;
  width: ${({ width }) => (width ? width + "px!important" : "100px!important")};
  height: 100px;
  animation: spinner 4s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
