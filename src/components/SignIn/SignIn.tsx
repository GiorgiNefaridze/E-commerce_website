import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import { SignInWrapper } from "./SignIn.style";

interface Props {
  setShowSignInPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  signInRef: React.MutableRefObject<HTMLDivElement | null>;
}

const SignIn: React.FC<Props> = ({ setShowSignInPopUp, signInRef }) => {
  const popUpRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLSpanElement>(null);

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

  return (
    <SignInWrapper ref={popUpRef}>
      <span title={t("close")} ref={closeRef}>
        X
      </span>
      <h1>{t("sign in")}</h1>
      <div className="google-btn">
        <div className="google-icon-wrapper">
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p className="btn-text">
          <b>Sign in with google</b>
        </p>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
