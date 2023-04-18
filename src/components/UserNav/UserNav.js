import { Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logoutAction } from "../../reduxSaga/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import clsx from "clsx";
import styles from "./UserNav.module.css";

const UserNav = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.dataLogin);
  const { checkLogin } = dataUser;
  const check = checkLogin;

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
      <Menu.Item key="1" disabled={!check} danger>
        Logout
      </Menu.Item>
      <Menu.Item key="2" disabled={!check}>
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
