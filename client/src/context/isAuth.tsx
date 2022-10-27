import React, { useState, createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface IisAuth {
  isAuthStatus: boolean;
  setIsAuthStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const isAuth = createContext<IisAuth>({} as IisAuth);

export const IsAuthContext = () => {
  return useContext(isAuth);
};

export const IsAuthContextProvider = ({ children }: Props) => {
  const [isAuthStatus, setIsAuthStatus] = useState<boolean>(
    JSON.parse(localStorage.getItem("isAuthStatus") || "false")
  );

  return (
    <isAuth.Provider value={{ isAuthStatus, setIsAuthStatus }}>
      {children}
    </isAuth.Provider>
  );
};
