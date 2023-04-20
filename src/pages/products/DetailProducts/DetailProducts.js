import { useEffect } from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { getProductRequest } from "../../../reduxSaga/actions/productActions";
import { useParams } from "react-router-dom";
import { Image } from "antd";
import styles from "./DetailProducts.module.css";

function DetailProducts() {
  const idProduct = useParams();
  const id = idProduct.id;
  const dispatch = useDispatch();
  const productInitState = useSelector((state) => state.productInitState);
  const { productById } = productInitState;

  useEffect(() => {
    dispatch(getProductRequest(id));
  }, [id]);

  if (!productById) {
    return <div>Loading...</div>;
  }
  return (
    <div className={clsx(styles.wrapper)}>
      <div className={clsx(styles.wrap_content)}>
        <h1 className={clsx(styles.title)}>DETAIL PRODUCT</h1>
        <Image
          width={200}
          src={productById.image}
          placeholder={
            <Image
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
              width={200}
            />
          }
        />
        <h3>{productById.name}</h3>
        <p>{productById.describe}</p>
        <h4>Giá: {productById.cost}</h4>
      </div>
    </div>
  );
}

export default DetailProducts;
