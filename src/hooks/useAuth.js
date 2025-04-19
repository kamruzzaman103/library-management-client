import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider"; // adjust if needed

export const useAuth = () => {
  return useContext(AuthContext);
};
