import axios from "axios";
import { useCallback } from "react";

export const useBook = () => {
  const appEndpoint = "/read-log";
  //const apiKey = process.env.API;
  const apiKey = "https://read-log-back.onrender.com";

  const getBook = useCallback(async () => {
    try {
      const response = await axios.get(`${apiKey}${appEndpoint}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200) {
        throw new Error("Imposible mostrar los libros");
      }

      const slicedBooks = response.data.book.slice(0, 110);

      return slicedBooks;
    } catch (error) {
      throw new Error("Error al obtener los datos del libro: " + error.message);
    }
  }, [apiKey, appEndpoint]);

  return { getBook };
};
