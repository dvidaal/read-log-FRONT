import { Outlet } from "react-router-dom";
import AppRoutes from "../../routers/routes";

const Layout = () => {
  return (
    <>
      <AppRoutes />
      <Outlet />
    </>
  );
};

export default Layout;
