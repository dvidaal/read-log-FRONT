/* import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import useToken from "./hooks/useToken/useToken.js";

const App = () => {
  const { token, setToken } = useToken();

  console.log("TOKEN ", token);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route
          path="/"
          element={token ? <HomePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
 */

// App.js
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import useToken from "./hooks/useToken/useToken";
import AppRoutes from "./routers/routes";

const App = () => {
  const { token, setToken } = useToken();

  console.log("TOKEN ", token);

  return (
    <Router>
      <AppRoutes setToken={setToken} />
    </Router>
  );
};

export default App;
