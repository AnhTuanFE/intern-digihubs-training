import { Button, Form, Input, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addProductRequest } from "../reduxSaga/action";
import "./CSSComonent/AddProduct.css";

const { TextArea } = Input;
function AddProduct() {
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const product = useSelector((state) => state.productAdd.product);
  const pro = {
    name: name,
    describe: describe,
    cost: cost,
    image: image,
  };
  const hanleAddProduct = () => {
    dispatch(addProductRequest(pro));
    alert("Thêm sản phẩm thành công");
    setName("");
    setDescribe("");
    setCost("");
    setImage("");
  };
  return (
    <div>
      <div className="wrapper">
        <h4>ADD PRODUCTS</h4>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Name Product">
            <Input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Describe">
            <TextArea
              rows={4}
              value={describe}
              onChange={(e) => {
                setDescribe(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Cost">
            <InputNumber
              value={cost}
              onChange={(e) => {
                setCost(e);
              }}
            />
          </Form.Item>
          <Form.Item label="Link Image">
            <Input
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={hanleAddProduct}>
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default AddProduct;
