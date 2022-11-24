import { useState } from "react";

import { AuthContext } from "../context/authContext";

interface ILogin {
  (email: string, password: string): void;
}

export const useLogIn = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const { setAuth } = AuthContext();

  const login: ILogin = async (email, password) => {
    setLoading(true);

    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      setLoading(false);
      setAuth({ id: result._id, authStatus: true, email: result.email });
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: result._id,
          authStatus: true,
          email: result.email,
        })
      );
    }

    if (!response.ok) {
      setLoading(false);
      setError(result.error);
      return result.error;
    }
  };

  return { login, loading, error, setError };
};
