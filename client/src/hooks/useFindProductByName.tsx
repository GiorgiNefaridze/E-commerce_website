import { useState } from "react";

export const useFindProductByName = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const findproductByName = async (value: string) => {
    if (value) {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/product/getProductByName",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: value }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        return result;
      }

      if (!response.ok) {
        setError(result.error);
      }

      setLoading(false);
    }
  };

  return { findproductByName, loading, error, setError };
};
