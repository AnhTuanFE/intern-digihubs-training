import { useSelector, useDispatch } from "react-redux";
import { getDetailProduct as getDetailProductAction } from "../reduxSaga/action";
import { useEffect } from "react";

function DetailProducts() {
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.detailProduct);
  useEffect(() => {
    dispatch(getDetailProductAction(1));
  }, []);
  console.log("==> detailProduct", detailProduct);
  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
    </div>
  );
}

export default DetailProducts;
