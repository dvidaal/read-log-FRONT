import "./App.css";
import "./styles/styles.css";
import Header from "./components/Header/Header";
import FilterBar from "./components/FilterBar/FilterBar";
import BooksList from "./components/BooksList/BooksList";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  return (
    <>
      <Header />
      <LoginForm />
      <FilterBar />
      <BooksList />
    </>
  );
}

export default App;
