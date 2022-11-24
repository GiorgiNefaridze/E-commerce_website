import { useState } from "react";

import { CartProductsContext } from "../context/cartProductsContext";

interface IGetCartProducts {
  (userId: string): void;
}

export const useGetCartProducts = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { setProducts } = CartProductsContext();

  const getCartProducts: IGetCartProducts = async (userId) => {
    setLoading(true);

    const response = await fetch(
      "http://localhost:5000/api/product/getAllProductFromCart",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      setProducts(result);
      setLoading(false);
    }

    if (!response.ok) {
      setError(result.error);
      setLoading(false);
    }
  };

  return { getCartProducts, loading, error };
};
