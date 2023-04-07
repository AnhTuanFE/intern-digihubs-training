import { useState } from "react";
import { useDispatch } from "react-redux"; // useSelector,
import { useNavigate } from "react-router-dom";
//, logoutAction
import { loginAction } from "../../reduxSaga/actions/action";
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
  return (
    <div className={clsx(styles.wrap_login)}>
      <div className={clsx(styles.wrap_form)}>
        <Form name="login" initialValues={{ remember: true }} form={form}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ message: "Please input your username!" }]}
            className={clsx(styles.input_item)}
          >
            <Input
              placeholder="Username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ message: "Please input your password!" }]}
            className={clsx(styles.input_item)}
          >
            <Input.Password
              placeholder="Password"
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
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
