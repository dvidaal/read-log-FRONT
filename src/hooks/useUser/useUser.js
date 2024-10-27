import axios from "axios";
import { useState } from "react";

const useUser = () => {
  //const apiUrl = "https://read-log-back.onrender.com";
  const apiUrl = "https://read-log-back-production.up.railway.app";
  const appEndpoint = "/users";
  const loginEndpoint = "/login";

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUser = async (username, password) => {
    try {
      const response = await axios.post(
        `${apiUrl}${appEndpoint}${loginEndpoint}`,
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      setIsLoggedIn(true);
      return response.data;
    } catch (error) {
      throw new Error("User not found");
    }
  };

  console.log("isLoggedIn:", isLoggedIn);

  return { isLoggedIn, loginUser };
};

export default useUser;
