import styled from "styled-components";

export const SignInWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px 0;
  z-index: 90;

  span {
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    top: 5%;
    right: 3%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }

  form {
    width: 50%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    border-radius: 50px;
    background-color: #f5f5f5;

    input {
      width: 25%;
      height: 40px;
      border: none;
      outline: none;
      padding: 10px;
      border-radius: 4px;
    }

    button {
      padding: 10px 15px;
      cursor: pointer;
    }

    p {
      font-size: 12px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
