import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { signInWithPopup, signOut } from "firebase/auth";

import { IsAuthContext } from "../../context/isAuth";

import { auth, googleProvider } from "../../firebase-config";

import { SignInWrapper } from "./SignIn.style";

interface Props {
  setShowSignInPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  signInRef: React.RefObject<HTMLDivElement>;
}

const SignIn: React.FC<Props> = ({ setShowSignInPopUp, signInRef }) => {
  const popUpRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLSpanElement>(null);

  const { isAuthStatus, setIsAuthStatus } = IsAuthContext();

  const { t } = useTranslation();

  const handleOutsideClick = (e: any) => {
    const { target } = e;

    if (
      (!popUpRef.current?.contains(target) && target !== signInRef?.current) ||
      target === closeRef.current
    ) {
      setShowSignInPopUp(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider);
    localStorage.setItem("isAuthStatus", "true");
    setIsAuthStatus(true);

    setShowSignInPopUp(false);
  };

  const signUserOut = async () => {
    await signOut(auth);
    localStorage.removeItem("isAuthStatus");
    setIsAuthStatus(false);
  };

  return (
    <SignInWrapper ref={popUpRef}>
      <span title={t("close")} ref={closeRef}>
        X
      </span>
      <h1>{t("sign in")}</h1>
      {isAuthStatus ? (
        <button onClick={signUserOut}>{t("sign out")}</button>
      ) : (
        <div className="google-btn" onClick={signInWithGoogle}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            />
          </div>
          <p className="btn-text">
            <b>{t("Sign in with google")}</b>
          </p>
        </div>
      )}
    </SignInWrapper>
  );
};

export default SignIn;
