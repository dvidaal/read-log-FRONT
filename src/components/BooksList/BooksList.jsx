import { useEffect, useState } from "react";
import { useBook } from "../../hooks/useBook/useBook";

const BooksList = () => {
  const { getBook } = useBook();
  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBook();
        if (response) {
          setBookData(response);
        }
      } catch (error) {
        console.error("Error al obtener los datos del libro:", error);
        setError("Error al obtener los datos del libro");
      }
    };

    fetchData();

    return () => {
      setBookData(null);
      setError(null);
    };
  }, [getBook]);

  return (
    <div>
      {error && <p className="text-black">{error}</p>}
      {bookData && (
        <div className="grid grid-cols-2 gap-4">
          {bookData.map((book, index) => (
            <div key={index} className="text-black border border-gray-300 p-4">
              <p className="font-bold">{book.Nº}</p>
              <p className="font-bold">Título:</p>
              <p>{book.Título}</p>
              <p className="font-bold">Autora:</p>
              <p>{book.Autora}</p>
              <p className="font-bold">Año:</p>
              <p>{book.Año}</p>
              <p className="font-bold">Score:</p>
              <p>{book.Puntuación}</p>
              <p className="font-bold">Tipo:</p>
              <p>{book.Tipo}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BooksList;
