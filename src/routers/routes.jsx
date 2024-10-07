import { Route, Routes } from "react-router-dom";
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
