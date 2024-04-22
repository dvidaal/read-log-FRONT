import { useEffect, useState } from "react";
import { useBook } from "../../hooks/useBook/useBook";
import BooksList from "../BooksList/BooksList";

const FilterBar = () => {
  const { getBook } = useBook();
  const [bookData, setBookData] = useState(null);
  const [selectValue, setSelectValue] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [booksFiltered, setBooksFiltered] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBook();
        if (response) {
          setBookData(response);
          const uniqueYears = [...new Set(response.map((book) => book.Año))];
          setFilteredBooks(uniqueYears);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
        setError("Error fetching book data");
      }
    };
    fetchData();
    return () => {
      setBookData(null);
    };
  }, [getBook]);
  

  const handleSelectChange = (event) => {
    const selectedYear = event.target.value;
    const selectedYearNumber = parseInt(selectedYear);
    setSelectValue(selectedYear);
    const booksFiltered = bookData.filter((book) => book.Año === selectedYearNumber);
    setBooksFiltered(booksFiltered);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {bookData && (
        <select
          className="select-text text-black bg-white rounded-lg px-4 py-2 border border-black focus:outline-none"
          value={selectValue}
          onChange={handleSelectChange}
        >
          <option value="">Reading year</option>
          {filteredBooks.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      )}
      <BooksList booksFiltered={booksFiltered} selectValue={selectValue} />
    </div>
  );
};

export default FilterBar;
