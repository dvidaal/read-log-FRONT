import axios from "axios";
import { useCallback } from "react";

export const useBook = () => {
  const appEndpoint = "/api/books";
  //const apiKey = process.env.API;
  //const apiKey = "https://read-log-back.onrender.com";
  const apiKey = "https://read-log-back-production.up.railway.app";

  const getBook = useCallback(async () => {
    try {
      const response = await axios.get(`${apiKey}${appEndpoint}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200) {
        throw new Error("Books not found");
      }

      const slicedBooks = response.data.book.slice(0, 110);

      return slicedBooks;
    } catch (error) {
      throw new Error("Error fetching books: " + error.message);
    }
  }, [apiKey, appEndpoint]);

  const deleteBook = useCallback(async (id) => {
    try {
      if (!id) {
        throw new Error("Book ID is required");
      }

      const response = await axios.delete(`${apiKey}${appEndpoint}/${id}`, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status !== 200) {
        throw new Error("Error deleting the book: " + response.statusText);
      }

      console.log("Book deleted successfully:", response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error deleting the book: " + error.message);
    }
  }, [apiKey, appEndpoint]);

  return { getBook, deleteBook };
};
