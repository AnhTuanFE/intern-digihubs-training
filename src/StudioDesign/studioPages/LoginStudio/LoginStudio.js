import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import clsx from "clsx";
import styles from "./LoginStudio.module.css";
import { loginActionStudioRequest } from "../../../reduxSaga/actions/userActions";
import { usersRemainingSelector } from "../../../reduxSaga/selectors/userSelector";
function LoginStudio() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const { userInfoStudio, registeredUserInfomation } = useSelector(
    usersRemainingSelector
  );

  const handleLogin = () => {
    dispatch(loginActionStudioRequest({ email, password }));
    // form.resetFields();
  };

  useEffect(() => {
    if (
      Object.keys(userInfoStudio).length > 0 ||
      Object.keys(registeredUserInfomation).length > 0
    ) {
      message.info("Đăng nhập thành công.");
      navigate("/studio");
    }
  }, [userInfoStudio, dispatch]);

  console.log("registeredUserInfomation = ", registeredUserInfomation);

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
            {/* .Password */}
            <Input
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

export default LoginStudio;
