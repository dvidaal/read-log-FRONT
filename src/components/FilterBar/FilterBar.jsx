import { useEffect, useState } from "react";
import { useBook } from "../../hooks/useBook/useBook";

const FilterBar = () => {
  const { getBook } = useBook();
  const [bookData, setBookData] = useState(null);
  const [selectValue, setSelectValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBook();
        if (response) {
          setBookData(response);
          // Filtrar los años únicos de los libros
          const uniqueYears = [...new Set(response.map((book) => book.Año))];
          setFilteredBooks(uniqueYears);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    };

    fetchData();

    return () => {
      setBookData(null);
    };
  }, [getBook]);

  const handleSelectChange = (event) => {
    const selectedYear = event.target.value;
    console.log("AÑO SELECCIONADO ", selectedYear);
    setSelectValue(selectedYear);
    const booksForYear = bookData.filter((book) => book.Año === selectedYear);
    console.log("BOOKS FILTRADOS ", booksForYear);
    setFilteredBooks(booksForYear);
  };

  return (
    <div className="flex items-center justify-center">
      {bookData && (
        <select
          className="select-text text-black bg-white rounded-lg px-4 py-2 border border-black focus:outline-none"
          value={selectValue}
          onChange={handleSelectChange}
        >
          <option value="">Seleccione un año</option>
          {filteredBooks.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default FilterBar;
