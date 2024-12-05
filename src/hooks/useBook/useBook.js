import axios from "axios";
import { useCallback } from "react";

export const useBook = () => {
  const apiKey = "https://read-log-back-production.up.railway.app";
  const appEndpoint = "/api/books";
  //const apiKey = process.env.API;
  //const apiKey = "https://read-log-back.onrender.com";

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

  const createBook = useCallback(
    async (newBook) => {
      try {
        const response = await axios.post(`${apiKey}${appEndpoint}`, newBook, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.status !== 201) {
          throw new Error("Failed to add book");
        }

        return response.data;
      } catch (error) {
        throw new Error("Error adding the book: " + error.message);
      }
    },
    [apiKey, appEndpoint]
  );

  const deleteBook = useCallback(
    async (id) => {
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

        return response.data;
      } catch (error) {
        throw new Error("Error deleting the book: " + error.message);
      }
    },
    [apiKey, appEndpoint]
  );

  const editBook = useCallback(
    async (id, updatedData) => {
      try {
        if (!id) {
          throw new Error("Book ID is required");
        }

        const response = await axios.put(
          `${apiKey}${appEndpoint}/${id}`,
          updatedData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Error editing the book: " + response.statusText);
        }

        return response.data.editedBook;
      } catch (error) {
        throw new Error("Error editing the book: " + error.message);
      }
    },
    [apiKey, appEndpoint]
  );

  return { getBook, deleteBook, createBook, editBook };
};
