import React, { useState, createContext, useContext, useEffect } from "react";

import { AuthContext } from "../context/authContext";

import { IProducts } from "../interfaces";

interface Props {
  children: React.ReactNode;
}

interface ICartProductsContext {
  products: IProducts[];
  setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const cartProductsContext = createContext({} as ICartProductsContext);

export const CartProductsContext = () => {
  return useContext(cartProductsContext);
};

export const CartProductsContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<IProducts[]>([]);

  const { auth } = AuthContext();

  return (
    <cartProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </cartProductsContext.Provider>
  );
};
