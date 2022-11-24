import { useState } from "react";

import { CartProductsContext } from "../context/cartProductsContext";

import { IProducts } from "../interfaces";

interface IAddProducts {
  (userId: string, product: IProducts): void;
}

export const useAddProduct = () => {
  const [error, setError] = useState<string>("");

  const { setProducts } = CartProductsContext();

  const addProduct: IAddProducts = async (userId, product) => {
    const response = await fetch(
      "http://localhost:5000/api/product/addProduct",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, ...product }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      setProducts((prev) => [...prev, result]);
    }

    if (!response.ok) {
      setError(result.error);
    }
  };

  return { addProduct, error, setError };
};
