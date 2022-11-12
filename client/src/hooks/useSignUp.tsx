import { useState } from "react";

interface ISignUp {
  (email: string, password: string): void;
}

export const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const signUp: ISignUp = async (email, password) => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      setLoading(false);
    }

    if (!response.ok) {
      setLoading(false);
      setError(result.error);
    }
  };

  return { loading, signUp, error, setError };
};
