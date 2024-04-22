import "./App.css";
import "./styles/styles.css";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import BooksList from "./components/BooksList/BooksList";

function App() {
  return (
    <>
      <Header />
      <FilterBar />
      <BooksList />
    </>
  );
}

export default App;
