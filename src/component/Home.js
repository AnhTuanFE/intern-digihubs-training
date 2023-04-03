import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testGetProductRequest as testGetProductRequestAction } from "../reduxSaga/action";
import BaseURL from "../reduxSaga/baseURL";

const Home = () => {
  const baseUrl = BaseURL.baseURL;
  const dispatch = useDispatch();
  const product = useSelector((state) => state.dataTestProduct);
  const handleGetData = () => {
    // gọi action truyền vô nó cái id = 2
    dispatch(testGetProductRequestAction(2));
  };
  useEffect(() => {
    console.log("=> data product", product);
    console.log("base url is :", `${baseUrl}/api`);
  });
  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={handleGetData}>GET DATA PRODUCT</button>
    </div>
  );
};
export default Home;
