import { useState } from "react";
import { useDispatch } from "react-redux"; // useSelector,
import { useNavigate } from "react-router-dom";
import { loginAction, logoutAction } from "../../reduxSaga/actions/action";
import { Form, Input, Button, message } from "antd";
import clsx from "clsx";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(loginAction({ email, password }));
    form.resetFields();
    setCheck(!check);
    message.info("Đăng nhập thành công.");
    navigate("/");
  };
  const handleLogout = () => {
    dispatch(logoutAction());
    setCheck(!check);
    form.resetFields();
    message.info("Đã đăng xuất.");
  };
  return (
    <div className={clsx(styles.wrap_login)}>
      <div className={clsx(styles.wrap_form)}>
        <h3 className={clsx(styles.title)}>Login</h3>
        <Form name="login" initialValues={{ remember: true }} form={form}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ message: "Please input your username!" }]}
          >
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ message: "Please input your password!" }]}
          >
            <Input.Password
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item className={clsx(styles.wrap_button)}>
            <Button
              type="primary"
              onClick={handleLogin}
              className={clsx(styles.button_login)}
            >
              Login
            </Button>
            {/* <Button
              type="primary"
              onClick={handleLogout}
              className={clsx(styles.button_logout)}
            >
              Logout
            </Button> */}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
