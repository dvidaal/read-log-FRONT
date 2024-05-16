import axios from "axios";

const useUser = () => {
  const apiUrl = "https://read-log-back.onrender.com";
  const appEndpoint = "/users";
  const loginEndpoint = "/login";

  const loginUser = async (username, password) => {
    try {
      const response = await axios.post(
        `${apiUrl}${appEndpoint}${loginEndpoint}`,
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      return response.data;
    } catch (error) {
      throw new Error("User not found");
    }
  };

  return { loginUser };
};

export default useUser;
