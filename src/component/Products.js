import { Image } from "antd";
import "./CSSComonent/Products.css";
import { useSelector, useDispatch } from "react-redux";
import {
  getListProducts as getListProductsAction,
  deleteProductRequest,
} from "../reduxSaga/actions/action";
import { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";
import "./CSSComonent/Products.css";

function Products() {
  const [checkRender, setCheckRender] = useState(false);
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.productsList);
  const { products, load } = listProducts;
  useEffect(() => {
    dispatch(getListProductsAction());
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
            <Button type="primary">Thêm sản phẩm mới</Button>
          </Link>
        </Space>
      </div>
      <div className="wrap_products">
        {products.map((item, index) => (
          <div key={index}>
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
                <Button type="primary">Chi tiết SP</Button>
              </Link>
              <Link to={`/updateproduct/${item.id}`}>
                <Button type="primary">Sửa SP</Button>
              </Link>

              <Button
                type="primary"
                onClick={() => {
                  handleDeleteProduct(item.id);
                }}
              >
                Xóa SP
              </Button>
            </Space>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
