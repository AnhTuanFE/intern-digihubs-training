import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Layout, Button, Popover } from "antd";
import { EyeFilled } from "@ant-design/icons";
import { enquireScreen } from "enquire-js";
import styles from "./HeaderStudio.module.css";
import clsx from "clsx";

const { Header } = Layout;

const LOGO_URL =
  "https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg";

function HeaderStudio() {
  return (
    <Layout>
      {/* className={clsx(styles.wrap_header)} */}
      <div>
        <div className={clsx(styles.header)}>
          <div className={clsx(styles.wrap_logo)}>
            <Link to="/studio">
              <div>
                <span className={clsx(styles.logo1)}>A+ </span>
                <span className={clsx(styles.logo2)}>Studio</span>
              </div>
            </Link>
          </div>
          <div className={clsx(styles.wrap_menu)}>
            <Menu id="nav" key="nav" className={clsx(styles.menu)}>
              <Menu.Item className={clsx(styles.menu_item)} key="home">
                <a href="">home</a>
              </Menu.Item>
              <Menu.Item className={clsx(styles.menu_item)} key="whatwedo">
                <a href="">
                  <span>What We Do</span>
                </a>
              </Menu.Item>
              <Menu.Item className={clsx(styles.menu_item)} key="server">
                <a href="">Service</a>
              </Menu.Item>
              <Menu.Item className={clsx(styles.menu_item)} key="project">
                <a href="">Project</a>
              </Menu.Item>
              <Menu.Item className={clsx(styles.menu_item)} key="blog">
                <a href="">Blog</a>
              </Menu.Item>
              <Menu.Item className={clsx(styles.menu_item)} key="contact">
                <a href="">Contact</a>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HeaderStudio;
