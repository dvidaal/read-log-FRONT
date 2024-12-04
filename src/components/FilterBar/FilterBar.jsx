import { useEffect, useState } from "react";
import { useBook } from "../../hooks/useBook/useBook";
import BooksList from "../BooksList/BooksList";
import CreateForm from "../CreateForm/CreateForm";
import { toast } from "@/hooks/use-toast";

const FilterBar = () => {
  const { getBook, deleteBook } = useBook();
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
          const sortedYears = uniqueYears.sort((a, b) => b - a);
          setFilteredBooks(sortedYears);

          if (sortedYears.length > 0) {
            const latestYear = sortedYears[0];
            setSelectValue(latestYear);
            const booksForLatestYear = response.filter(
              (book) => book.Año === latestYear
            );
            setBooksFiltered(booksForLatestYear);
          }
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
    const selectedYearNumber = parseInt(selectedYear);
    setSelectValue(selectedYear);
    const booksFiltered = bookData.filter(
      (book) => book.Año === selectedYearNumber
    );
    setBooksFiltered(booksFiltered);
  };

  const handleBookDeleted = async (deletedBookId) => {
    try {
      await deleteBook(deletedBookId);

      setBookData((prevBooks) => prevBooks.filter((book) => book.id !== deletedBookId));
      setBooksFiltered((prevBooks) => prevBooks.filter((book) => book.id !== deletedBookId));

      toast({
        variant: "success",
        title: "Book deleted successfully!"
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to delete book. Try again :("
      })
      console.error("Error eliminando el libro:", error.message);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center w-full mb-4">
        <h2 className="text-black text-4xl font-bold mb-4 md:mb-0">
          My Reading List
        </h2>
        <CreateForm />
      </div>

      <div className="flex flex-col items-center md:items-start">
        {bookData && (
          <select
            className="mb-4 select-text text-black bg-white rounded-lg px-4 py-2 border border-black focus:outline-none mx-auto md:mx-0"
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
        <BooksList booksFiltered={booksFiltered} selectValue={selectValue} onBookDeleted={handleBookDeleted} />
      </div>
    </>
  );
};

export default FilterBar;
