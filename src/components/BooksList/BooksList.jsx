
const BooksList = ({ booksFiltered }) => {

  return (
    <div>
      {booksFiltered && (
        <div className="grid grid-cols-2 gap-4 p-4">
          {booksFiltered.map((book, index) => (
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

