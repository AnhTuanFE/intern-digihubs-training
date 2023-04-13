import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import User from "../../../component/User";

const { Header } = Layout;
function UseHeader() {
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo">
            <Link to="/">
              <img src="./images/logo1.jpg" alt="LOGO" className="logo_item" />
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
                HOME
              </Link>
            </Menu.Item>
            <Menu.Item key="product">
              <Link className="nav_item" to="/products">
                PRODUCTS
              </Link>
            </Menu.Item>
            <Menu.Item key="addProduct">
              <Link className="nav_item" to="/addproduct">
                ADD PRODUCT
              </Link>
            </Menu.Item>
            <Menu.Item key="imagePost">
              <Link className="nav_item" to="/imagepost">
                LIST IMAGE
              </Link>
            </Menu.Item>
            <Menu.Item key="studio">
              <Link className="nav_item" to="/studio">
                STUDIO DESIGN
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
        </Header>
      </Layout>
    </div>
  );
}

export default memo(UseHeader);
