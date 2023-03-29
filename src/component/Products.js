import axios from "axios";
import { Image } from "antd";
import "./CSSComonent/Products.css";
import { useSelector, useDispatch } from "react-redux";
import { getListProducts as getListProductsAction } from "../reduxSaga/action";
import { useEffect } from "react";
import { Button, Space } from "antd";

function Products() {
  const dispatch = useDispatch();
  const listProducts = useSelector((state) => state.productsList);
  const { products, load } = listProducts;
  useEffect(() => {
    dispatch(getListProductsAction());
    console.log("data products", products);
  }, []);
  const handleGetAPI = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `http://localhost:3004/comments`,
        config
      );
      if (data) {
        alert("Get data success!");
      }
    } catch (err) {
      alert("Get data failed, please review your account information");
    }
  };

  //=======================
  let comentValue = {
    body: "some comment 5",
    postId: 5,
  };
  const handlePostAPI = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `http://localhost:3004/comments`,
        { body: "some comment 5", postId: 5 },
        config
      );
      if (data) {
        alert("post data success!");
      }
    } catch (err) {
      alert("post data failed, please review your account information");
    }
  };

  //=======================
  const handleDeleteAPI = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.delete(
        `http://localhost:3004/comments/${3}`,
        config
      );
      if (data) {
        alert("Delete data success!");
      }
    } catch (err) {
      alert("Delete data failed, please review your account information");
    }
  };

  //==============
  const handleUpdateAPI = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.put(
        `http://localhost:3004/comments/${2}`,
        { body: "some comment update", name: "update name" },
        config
      );
      if (data) {
        alert("Update data success!");
      }
    } catch (err) {
      alert("Update data failed, please review your account information");
    }
  };
  //==================
  const dataFake = {
    id: 1,
    name: "Tiếng Việt 1/2 (Chân Trời Sáng Tạo)",
    describe: "Sách giáo khoa cho trẻ, chương trình chính quy",
    cost: 31000,
    image:
      "https://cdn0.fahasa.com/media/catalog/product/9/7/9786040288165.jpg",
  };
  return (
    <div>
      <div>
        <button onClick={handleGetAPI}>Get</button>
        <button onClick={handlePostAPI}>Post</button>
        <button onClick={handleDeleteAPI}>Delete</button>
        <button onClick={handleUpdateAPI}>Update</button>
      </div>
      <div className="wrap_products">
        {products.map((item, index) => (
          <div>
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
              <Button type="primary">Xem chi tiết</Button>
            </Space>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
