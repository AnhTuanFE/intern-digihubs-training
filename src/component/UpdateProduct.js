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
  const { name, describe, cost, image } = productInfor;

  const [name1, setName] = useState("");
  const [describe1, setDescribe] = useState("");
  const [cost1, setCost] = useState("");
  const [image1, setImage] = useState("");
  // const [dataChange, setDataChange] = useState(productInfor);

  console.log("productInfor = ", productInfor);
  useEffect(() => {
    dispatch(getProductRequest(id));
  }, [id]);

  const updateProduct = {
    id: id,
    product: {
      name: name1,
      describe: describe1,
      cost: cost1,
      image: image1,
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
              value={productInfor.name}
              onChange={(e) => {
                productInfor.name = e.target.value;
                setName(productInfor.name);
              }}
            />
          </Form.Item>
          <Form.Item label="Describe">
            <TextArea
              rows={4}
              value={productInfor.describe}
              onChange={(e) => {
                productInfor.describe = e.target.value;
                setDescribe(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Cost">
            <InputNumber
              value={productInfor.cost}
              onChange={(e) => {
                productInfor.cost = e;
                setCost(e);
              }}
            />
          </Form.Item>
          <Form.Item label="Link Image">
            <Input
              value={productInfor.image}
              onChange={(e) => {
                productInfor.image = e.target.value;
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
