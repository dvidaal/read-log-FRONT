// import PropTypes from "prop-types";
// import Button from "../Button/Button";

// const BooksList = ({ booksFiltered, onBookDeleted, onBookEdited }) => {
//   const handleDeleteBook = (id) => {
//     if (onBookDeleted) {
//       onBookDeleted(id);
//     }
//   };

//   const handleEditSumbit = (updatedData) =>{
//     if(onBookEdited){
//       onBookEdited(updatedData)
//     }
//   };

//   return (
//     <div className="containerBooks">
//       {booksFiltered && (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {booksFiltered.map((book) => (
//             <div
//               key={book.id}
//               className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center"
//             >
//               <div className="text-center">
//                 <p className="font-bold text-lg mb-2 text-black">
//                   {book.Título}
//                 </p>
//                 <p className="text-gray-600">{book.Autora}</p>
//                 <p className="text-gray-500 mb-2">{book.Tipo}</p>
//                 <p className="text-yellow-500 flex items-center justify-center text-sm mt-2">
//                   ⭐ {book.Puntuación}
//                 </p>
//               </div>
//               <div className="flex flex-row gap-2 mt-4">
//                 <Button text="Edit" onClick={() => handleEditSumbit(book.id)}/>
//                 <Button text="Delete" onClick={() => handleDeleteBook(book.id)} />
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// BooksList.propTypes = {
//   booksFiltered: PropTypes.array.isRequired,
//   onBookDeleted: PropTypes.func,
// };

// export default BooksList;

import PropTypes from "prop-types";
import Button from "../Button/Button";
import EditBookDrawer from "../EditBookDrawer/EditBookDrawer";

const BooksList = ({ booksFiltered, onBookDeleted, onBookEdited }) => {
  const handleDeleteBook = (id) => {
    if (onBookDeleted) {
      onBookDeleted(id);
    }
  };

  return (
    <div className="containerBooks">
      {booksFiltered && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {booksFiltered.map((book) => (
            <div
              key={book.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4 flex flex-col items-center"
            >
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
              <div className="flex flex-row gap-2 mt-4">
                <EditBookDrawer book={book} onBookEdited={onBookEdited} />
                <Button
                  text="Delete"
                  onClick={() => handleDeleteBook(book.id)}
                />
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
  onBookDeleted: PropTypes.func,
  onBookEdited: PropTypes.func,
};

export default BooksList;
