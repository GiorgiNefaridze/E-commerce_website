import { useState } from "react";

export const useFindProductByName = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const findproductByName = async (value: string) => {
    if (value) {
      setLoading(true);
      setError("");

      const response = await fetch(
        process.env.REACT_APP_HOST + "/api/product/getProductByName",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: value }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setLoading(false);
        return result;
      }

      if (!response.ok) {
        setError(result.error);
        setLoading(false);
      }
    }
  };

  return { findproductByName, loading, error, setError };
};
