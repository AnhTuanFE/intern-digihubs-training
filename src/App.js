import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Products from "./component/Products";
import GetDataFromSaga from "./component/GetDataFromSaga";
import "./App.css";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;
function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Router>
        <Layout>
          <Header
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
              // theme="light"
              mode="horizontal"
              // defaultSelectedKeys={["2"]}
            >
              <Link className="nav_item" to="/">
                Home
              </Link>
              <Link className="nav_item" to="/products">
                Products
              </Link>
              <Link className="nav_item" to="/getsaga">
                Get data from saga
              </Link>
            </Menu>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/getsaga" element={<GetDataFromSaga />} />
            </Routes>
          </Header>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
