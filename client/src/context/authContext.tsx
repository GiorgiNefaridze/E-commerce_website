import React, { useState, createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface IAuth {
  id: string;
  authStatus: boolean;
}

interface IAuthContext {
  auth: IAuth | null;
  setAuth: React.Dispatch<React.SetStateAction<IAuthContext | null>>;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContext = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<IAuthContext | null>(null);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};
