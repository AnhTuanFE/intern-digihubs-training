import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getProductRequest,
  updateProductRequest,
} from "../../../reduxSaga/actions/productActions";
import clsx from "clsx";
import styles from "./UpdateProduct.module.css";
const { TextArea } = Input;

const UpdateProduct = () => {
  const idProduct = useParams();
  const id = idProduct.id;

  const dispatch = useDispatch();
  // const productInfor = useSelector((state) => state.productId.product);
  const productInitState = useSelector((state) => state.productInitState);
  const { productById } = productInitState;

  const [name1, setName] = useState("");
  const [describe1, setDescribe] = useState("");
  const [cost1, setCost] = useState("");
  const [image1, setImage] = useState("");

  useEffect(() => {
    dispatch(getProductRequest(id));
  }, [id]);

  useEffect(() => {
    setName(productById.name);
    setDescribe(productById.describe);
    setCost(productById.cost);
    setImage(productById.image);
  });

  const productWillUpdate = {
    id: id,
    product: {
      name: name1,
      describe: describe1,
      cost: cost1,
      image: image1,
    },
  };

  const handleUpdate = () => {
    dispatch(updateProductRequest(productWillUpdate));
    alert("Cập nhật sản phẩm thành công");
  };
  if (!productById) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className={clsx(styles.wrapper)}>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          className={clsx(styles.form)}
        >
          <h4>UPDATE PRODUCTS</h4>
          <Form.Item label="Name Product">
            <Input
              value={name1}
              onChange={(e) => {
                productById.name = e.target.value;
                setName(productById.name);
              }}
            />
          </Form.Item>
          <Form.Item label="Describe">
            <TextArea
              rows={4}
              value={describe1}
              onChange={(e) => {
                productById.describe = e.target.value;
                setDescribe(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Cost">
            <Input
              value={cost1}
              onChange={(e) => {
                productById.cost = e.target.value;
                setCost(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item label="Link Image">
            <Input
              value={image1}
              onChange={(e) => {
                productById.image = e.target.value;
                setImage(e.target.value);
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              onClick={handleUpdate}
              className={clsx(styles.button_update)}
            >
              Update Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default UpdateProduct;
