import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logoutAction } from "../../reduxSaga/actions/userActions";
import { usersRemainingSelector } from "../../reduxSaga/selectors/userSelector";
import styles from "./UserNav.module.css";

const UserNav = () => {
  const dispatch = useDispatch();

  const { checkLogin } = useSelector(usersRemainingSelector);

  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        dispatch(logoutAction());
        navigate("/");
        break;
      case "2":
        navigate("/accountinformation");
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" disabled={!checkLogin} danger>
        Logout
      </Menu.Item>
      <Menu.Item key="2" disabled={!checkLogin}>
        Account Information
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={clsx(styles.wrap_user)}>
      {checkLogin ? (
        <Dropdown
          overlay={menu}
          icon={<UserOutlined />}
          className={clsx(styles.drop_button)}
        >
          <img
            src="./images/user.png"
            alt="USER"
            className={clsx(styles.logo_user)}
          />
        </Dropdown>
      ) : (
        <div className={clsx(styles.title_login)}>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
};
export default UserNav;
