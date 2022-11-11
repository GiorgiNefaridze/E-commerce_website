import React, { useState, createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

interface IAuth {
  id: string;
  authStatus: boolean;
  email: string;
}

interface IAuthContext {
  auth: IAuth | null;
  setAuth: React.Dispatch<React.SetStateAction<IAuth | null>>;
}

const authContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContext = () => {
  return useContext(authContext);
};

export const AuthContextProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<IAuth | null>(null);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};
