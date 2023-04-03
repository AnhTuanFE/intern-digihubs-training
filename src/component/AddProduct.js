import { Button, Form, Input } from "antd"; //, Checkbox, InputNumber
import { useDispatch } from "react-redux"; //useSelector,
import { useState } from "react";
import { addProductRequest } from "../reduxSaga/actions/action";

import "./CSSComonent/Product.css";

const { TextArea } = Input;
function AddProduct() {
  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  // const product = useSelector((state) => state.productAdd.product);
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
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          className="form"
        >
          <h1>ADD PRODUCT</h1>
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
            <Input
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
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
