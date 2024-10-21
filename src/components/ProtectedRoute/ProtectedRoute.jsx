/* import PropTypes from "prop-types";
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
 */

// ProtectedRoute.js
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import useToken from "../../hooks/useToken/useToken";

const ProtectedRoute = ({ element }) => {
  const { token } = useToken();

  return token ? element : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
