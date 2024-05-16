import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

const App = () => {
  const token = localStorage.getItem("token_read-log");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={token ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={token ? <LoginPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
