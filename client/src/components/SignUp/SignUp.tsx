import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { useSignUp } from "../../hooks/useSignUp";

interface IProps {
  setSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const SignUp: React.FC<IProps> = ({ setSignUp }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { t } = useTranslation();
  const { signUp, loading, error, setError } = useSignUp();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signUp(email, password);
    setEmail("");
    setPassword("");

    // setSignUp(false)
  };

  return (
    <>
      <h1>{t("signup")}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          placeholder={t("enter your email")}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
          placeholder={t("enter your password")}
        />
        <button>{loading ? "Loading..." : t("signup")}</button>
        {error}
      </form>
    </>
  );
};

export default SignUp;
