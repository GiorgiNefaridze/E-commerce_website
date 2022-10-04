import styled from "styled-components";

export const SignInWrapper = styled.div`
  width: 40%;
  height: 50%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px 0;

  box-shadow: 1px 1px 4px 10000px rgba(0, 0, 0, 0.3);

  span {
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    top: 5%;
    right: 3%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  .google-btn {
    width: 184px;
    height: 42px;
    background-color: #4285f4;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    cursor: pointer;
    .google-icon-wrapper {
      position: absolute;
      margin-top: 1px;
      margin-left: 1px;
      width: 40px;
      height: 40px;
      border-radius: 2px;
      background-color: white;
    }
    .google-icon {
      position: absolute;
      margin-top: 11px;
      margin-left: 11px;
      width: 18px;
      height: 18px;
    }
    .btn-text {
      float: right;
      margin: 11px 11px 0 0;
      color: white;
      font-size: 14px;
      letter-spacing: 0.2px;
      font-family: "Roboto";
    }
    &:hover {
      box-shadow: 0 0 6px #4285f4;
    }
    &:active {
      background: #1669f2;
    }
  }
`;
