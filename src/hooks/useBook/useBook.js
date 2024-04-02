import axios from "axios";
import { useCallback } from "react";

export const useBook = () => {
  const appEndpoint = "/read-log";
  const apiKey = process.env.API;

  const getBook = useCallback(async () => {
    try {
      const response = await axios.get(`${apiKey}${appEndpoint}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Imposible mostrar los libros");
      }
    } catch (error) {
      throw new Error("Error");
    }
  }, [apiKey, appEndpoint]);

  return { getBook };
};
