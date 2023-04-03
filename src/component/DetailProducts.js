import { useSelector, useDispatch } from "react-redux";
import { getProductRequest } from "../reduxSaga/actions/action";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import "./CSSComonent/Product.css";

function DetailProducts() {
  const idProduct = useParams();
  const id = idProduct.id;
  // console.log("productId", idProduct.id);
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.productId.product);
  useEffect(() => {
    dispatch(getProductRequest(id));
    // console.log("==> detailProduct", detailProduct);
  }, [id]);

  if (!detailProduct) {
    return <div>Loading...</div>;
  }
  return (
    <div className="wrapper">
      <div className="wrap_content">
        <h1>DETAIL PRODUCT</h1>
        <Image
          width={200}
          src={detailProduct.image}
          placeholder={
            <Image
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              width={200}
            />
          }
        />
        <h3>{detailProduct.name}</h3>
        <p>{detailProduct.describe}</p>
        <h4>Giá: {detailProduct.cost}</h4>
      </div>
    </div>
  );
}

export default DetailProducts;
