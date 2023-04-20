import React from "react";
import { Button, Space, Layout, Col, Divider, Row, Image } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  getListProducts,
  deleteProductRequest,
} from "../../../reduxSaga/actions/productActions";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import styles from "./AllProducts.module.css";
const { Content } = Layout;

const style = {
  background: "#ffff",
  padding: "8px 0",
  color: "black",
};
const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  // border: "1px solid #000",
};

function AllProducts() {
  const [checkRender, setCheckRender] = useState(false);

  const dispatch = useDispatch();

  const productInitState = useSelector((state) => state.productInitState);

  // const { products, load } = listProducts;
  const { listProducts } = productInitState;

  useEffect(() => {
    dispatch(getListProducts());
  }, [checkRender]);

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product??")) {
      dispatch(deleteProductRequest(id));
      setCheckRender(!checkRender);
    }
  };
  return (
    <div>
      <div>
        <Space wrap>
          <Link to="/addproduct">
            <Button className={clsx(styles.button_add_product)} type="primary">
              Thêm sản phẩm mới
            </Button>
          </Link>
        </Space>
      </div>
      <div>
        <Layout>
          <Content style={contentStyle}>
            <Divider
              orientation="center"
              className={clsx(styles.title_products)}
            >
              Tất cả sản phẩm
            </Divider>
            <Row
              gutter={{
                xs: 8,
                md: 24,
                lg: 32,
              }}
            >
              {listProducts.map((item, index) => (
                <Col className={clsx(styles.gutter_row)} span={6} key={index}>
                  <div style={style}>
                    <Image
                      width={200}
                      src={item.image}
                      placeholder={
                        <Image
                          preview={false}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                          width={200}
                        />
                      }
                    />
                    <p>{item.name}</p>
                    <p>Giá: {item.cost}</p>
                    <Space wrap>
                      <Link to={`/detaiproduct/${item.id}`}>
                        <Button
                          type="primary"
                          className={clsx(styles.use_button)}
                        >
                          Chi tiết SP
                        </Button>
                      </Link>
                      <Link to={`/updateproduct/${item.id}`}>
                        <Button
                          type="primary"
                          className={clsx(styles.use_button)}
                        >
                          Sửa SP
                        </Button>
                      </Link>

                      <Button
                        type="primary"
                        onClick={() => {
                          handleDeleteProduct(item.id);
                        }}
                        className={clsx(styles.use_button)}
                      >
                        Xóa SP
                      </Button>
                    </Space>
                  </div>
                </Col>
              ))}
            </Row>
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default AllProducts;
