import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 60px 0;
  padding-block: 100px;
  font-family: "Fira Sans";
  font-weight: 600;
`;

export const CarrouselWrapper = styled.div`
  width: 80%;
  margin: auto;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  gap: 0 20px;
  margin-bottom: 15px;

  span {
    background-color: white;
    border-radius: 8px;
    color: red;
    font-weight: bold;
    padding: 7px;
    cursor: pointer;
  }
`;
