import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { usersRemainingSelector } from "../../reduxSaga/selectors/userSelector";
function RouteConfirmation() {
  const { checkLogin } = useSelector(usersRemainingSelector);

  return checkLogin ? <Outlet /> : <Navigate to="/login" />;
}
export default RouteConfirmation;
