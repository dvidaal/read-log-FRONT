import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token_read-log");
  console.log("TOKENSITO ", token);

  return token ? element : <Navigate to={"/login"} replace={true} />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
