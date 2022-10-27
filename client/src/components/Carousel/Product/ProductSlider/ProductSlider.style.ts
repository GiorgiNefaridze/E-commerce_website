import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    button {
      display: block !important;
    }
  }

  button {
    display: none !important;
    width: 10%;
    border: none;
    outline: none;
    clip-path: circle(50% at 100% 50%);
    background-color: #c5c3c3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    cursor: pointer;

    &:first-child {
      transform: rotate(180deg);
    }
  }

  img {
    width: 80%;
    height: 100%;
  }
`;
