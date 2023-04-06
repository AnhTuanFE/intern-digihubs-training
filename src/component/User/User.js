import { Dropdown, Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { logoutAction } from "../../reduxSaga/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const User = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.dataLogin);
  const { checkLogin } = dataUser;
  const check = checkLogin;
  const navigate = useNavigate();
  const handleMenuClick = (e) => {
    switch (e.key) {
      case "1":
        navigate("/login");
        break;
      case "2":
        dispatch(logoutAction());
        navigate("/");
        break;
      case "3":
        navigate("/accountinformation");
        break;
      default:
        break;
    }
  };
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" disabled={check}>
        Login
      </Menu.Item>
      <Menu.Item key="2" disabled={!check} danger>
        Logout
      </Menu.Item>
      <Menu.Item key="3" disabled={!check}>
        Account Information
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown.Button overlay={menu} icon={<UserOutlined />}>
        <span>User</span>
      </Dropdown.Button>
    </div>
  );
};
export default User;
