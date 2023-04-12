import { useState, useEffect } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { registerActionRequest } from "../../reduxSaga/actions/action";
import styles from "./Register.module.css";
import { Button, Checkbox, Form, Input } from "antd";

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassWord] = useState("");
  const [email, setEmail] = useState("");
  const [checkRegister, setCheckRegister] = useState(false);

  const dispatch = useDispatch();
  const inforUser = useSelector((state) => state.dataRegister);

  useEffect(() => {
    console.log("dataRegister = ", inforUser);
  }, [checkRegister]);

  const handleRegister = () => {
    dispatch(registerActionRequest({ name, email, phone, password }));
    setCheckRegister((pvev) => !pvev);
  };
  return (
    <div className={clsx(styles.wrap_register)}>
      <div className={clsx(styles.register)}>
        <h1 className={clsx(styles.register_title)}>REGISTER</h1>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              style={{ backgroundColor: "#000" }}
              onClick={handleRegister}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Register;
