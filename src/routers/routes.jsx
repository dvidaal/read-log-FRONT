/* import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
 */

// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const AppRoutes = ({ setToken }) => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setToken={setToken} />} />
      <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
    </Routes>
  );
};

export default AppRoutes;
