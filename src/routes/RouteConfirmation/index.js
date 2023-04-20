import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function RouteConfirmation() {
  const userReducerInitState = useSelector(
    (state) => state.userReducerInitState
  );

  const { checkLogin } = userReducerInitState;

  console.log(
    "userReducerInitState = ",
    userReducerInitState,
    "checkLogin = ",
    checkLogin
  );
  return checkLogin ? <Outlet /> : <Navigate to="/login" />;
}
export default RouteConfirmation;
