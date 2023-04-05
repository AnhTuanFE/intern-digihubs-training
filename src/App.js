import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import DetailProducts from "./component/DetailProducts";
import UpdateProduct from "./component/UpdateProduct";
import Products from "./component/Products";
import "./App.css";
import { Layout, Menu } from "antd";
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
            </Menu>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/detaiproduct/:id" element={<DetailProducts />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/updateproduct/:id" element={<UpdateProduct />} />
            </Routes>
          </Header>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
