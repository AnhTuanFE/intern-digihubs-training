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
import { LoadingPosts } from "./component/Products/lazy/LoadingPosts";
import Posts from "./component/Products/lazy/Posts";
import AccountInformation from "./component/AccountInformation";
import "./App.css";

const LazyProducts = React.lazy(() => import("./component/Products"));
const { Header } = Layout;

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo">
              <Link to="/">
                <img
                  src="./images/logo1.jpg"
                  alt="LOGO"
                  className="logo_item"
                />
              </Link>
            </div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              text-color="white"
              style={{ display: "flex" }}
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
              <Menu.Item key="imagePost">
                <Link className="nav_item" to="/imagepost">
                  image Post
                </Link>
              </Menu.Item>
              <Menu.Item
                key="user"
                style={{ marginLeft: "auto", marginRight: "10%" }}
                className="wrap_logo"
              >
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
              <Route path="/imagepost" element={<Posts />} />
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
