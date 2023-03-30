import { useState, useEffect, useLayoutEffect } from "react";
import { Button, Form, Input, InputNumber } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductRequest, updateProductRequest } from "../reduxSaga/action";

const { TextArea } = Input;

const UpdateProduct = () => {
  const idProduct = useParams();
  const id = idProduct.id;
  const dispatch = useDispatch();
  const productInfor = useSelector((state) => state.productId.product);

  const [name, setName] = useState("");
  const [describe, setDescribe] = useState("");
  const [cost, setCost] = useState("");
  const [image, setImage] = useState("");
  const [dataChange, setDataChange] = useState(productInfor);

  console.log("productInfor = ", productInfor);
  useEffect(() => {
    dispatch(getProductRequest(id));
  }, [id]);

  const updateProduct = {
    id: id,
    product: {
      name: name,
      describe: describe,
      cost: cost,
      image: image,
    },
  };
  const handleUpdate = () => {
    dispatch(updateProductRequest(updateProduct));
  };
  if (!productInfor) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="wrapper">
        <h4>UPDATE PRODUCTS</h4>
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
              defaultValue={dataChange.name}
              onChange={(e) => {
                setName(...e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Describe">
            <TextArea
              rows={4}
              defaultValue={dataChange.describe}
              onChange={(e) => {
                setDescribe(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Cost">
            <InputNumber
              defaultValue={dataChange.cost}
              onChange={(e) => {
                setCost(e);
              }}
            />
          </Form.Item>
          <Form.Item label="Link Image">
            <Input
              defaultValue={dataChange.image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button onClick={handleUpdate}>Update Product</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default UpdateProduct;
