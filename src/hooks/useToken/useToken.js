import { jwtDecode } from "jwt-decode";
import { useAppDispatch } from "../../store/hook";
import { useCallback } from "react";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = localStorage.getItem("token");
    console.log("TOKENSITO ", token);

    if (token) {
      const { username, id } = jwtDecode(token);

      dispatch(username, token, id);
    }
  }, [dispatch]);

  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return { getToken, removeToken };
};

export default useToken;
