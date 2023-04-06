import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const dataUser = useSelector((state) => state.dataLogin);
  const { checkLogin } = dataUser;
  return checkLogin ? <Outlet /> : <Navigate to="/login" />;
}
export default PrivateRoute;
