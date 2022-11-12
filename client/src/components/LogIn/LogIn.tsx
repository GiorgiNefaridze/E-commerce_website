import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import SignUp from "../SignUp/SignUp";
import { AuthContext } from "../../context/authContext";

import { SignInWrapper } from "./LogIn.style";

interface Props {
  setShowSignInPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignIn: React.FC<Props> = ({ setShowSignInPopUp }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signUp, setSignUp] = useState<boolean>(false);

  const closeRef = useRef<HTMLSpanElement | null>(null);

  const { t } = useTranslation();
  const { auth } = AuthContext();

  const handleOutsideClick = (e: any) => {
    const { target } = e;

    if (target === closeRef.current) {
      setShowSignInPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const makeSignUp = (): void => {
    setSignUp(true);
  };

  return (
    <SignInWrapper>
      <span title={t("close")} ref={closeRef}>
        X
      </span>
      {signUp && <SignUp setSignUp={setSignUp} />}
      {!signUp && (
        <>
          <h1>{t("log in")}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("enter your email")}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t("enter your password")}
            />
            <button>{t("log in")}</button>
            <p onClick={makeSignUp}>{t("sign up")}</p>
          </form>
        </>
      )}
    </SignInWrapper>
  );
};

export default SignIn;
