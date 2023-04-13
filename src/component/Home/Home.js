import React, { useState, useEffect } from "react";
import TableScroll from "../TableScroll/TableScroll";
import baseURL from "../../reduxSaga/apis/baseURL";
const Home = () => {
  useEffect(() => {
    console.log("baseURL = ", baseURL.serverURL);
  }, []);
  return (
    <div>
      <h1>HOME PAGE</h1>
      <TableScroll />
    </div>
  );
};
export default Home;
