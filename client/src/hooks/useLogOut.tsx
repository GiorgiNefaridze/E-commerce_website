import { AuthContext } from "../context/authContext";

export const useLogOut = () => {
  const { setAuth } = AuthContext();

  const logout = () => {
    setAuth(null);
    localStorage.removeItem("user");
  };

  return { logout };
};
