import PropTypes from "prop-types";

const BooksList = ({ booksFiltered }) => {
  return (
    <div className="containerBooks">
      {booksFiltered && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {booksFiltered.map((book, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                <p className="text-gray-400">No Image</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg mb-2 text-black">
                  {book.Título}
                </p>
                <p className="text-gray-600">{book.Autora}</p>
                <p className="text-gray-500 mb-2">{book.Tipo}</p>
                <p className="text-yellow-500 flex items-center justify-center text-sm mt-2">
                  ⭐ {book.Puntuación}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

BooksList.propTypes = {
  booksFiltered: PropTypes.array.isRequired,
};

export default BooksList;
