import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import DetailProducts from "./component/DetailProducts";
import UpdateProduct from "./component/UpdateProduct";
import Login from "./component/Login/Login";
import User from "./component/User";
import { Layout, Menu } from "antd";

import AccountInformation from "./component/AccountInformation";
import "./App.css";

const LazyProducts = React.lazy(() => import("./component/Products"));
const { Header } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header
            className="header"
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
            }}
          >
            <div
              style={{
                float: "left",
                width: 120,
                height: 31,
                margin: "16px 24px 16px 0",
                background: "rgba(255, 255, 255, 0.2)",
              }}
            ></div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              text-color="white"
            >
              <Menu.Item key="home">
                <Link className="nav_item" to="/">
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="product">
                <Link className="nav_item" to="/products">
                  Products
                </Link>
              </Menu.Item>
              <Menu.Item key="addProduct">
                <Link className="nav_item" to="/addproduct">
                  Add product
                </Link>
              </Menu.Item>
              <Menu.Item key="user">
                <User />
              </Menu.Item>
            </Menu>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/products"
                element={
                  <React.Suspense fallback={<div>Loading products...</div>}>
                    <LazyProducts />
                  </React.Suspense>
                }
              />
              <Route path="/detaiproduct/:id" element={<DetailProducts />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/updateproduct/:id" element={<UpdateProduct />} />
              <Route path="/login" element={<Login />} />
              <Route element={<PrivateRoute />}>
                <Route
                  path="/accountinformation"
                  element={<AccountInformation />}
                />
              </Route>
            </Routes>
          </Header>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
