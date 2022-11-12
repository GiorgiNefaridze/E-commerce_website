import React, { useState, createContext, useContext, useEffect } from "react";

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "false");

    if (user) {
      setAuth(user);
    } else {
      setAuth(null);
    }
  }, []);

  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  );
};
