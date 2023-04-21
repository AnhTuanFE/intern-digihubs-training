import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Layout, Button, Popover } from "antd";
import { EyeFilled } from "@ant-design/icons";
import styles from "./HeaderStudio.module.css";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { logoutActionStudio } from "../../../../reduxSaga/actions/userActions";
import { usersRemainingSelector } from "../../../../reduxSaga/selectors/userSelector";

function HeaderStudio() {
  const dispatch = useDispatch();

  const { userInfoStudio, registeredUserInfomation } = useSelector(
    usersRemainingSelector
  );
  console.log(
    "userInfoStudio = ",
    userInfoStudio,
    "registeredUserInfomation = ",
    registeredUserInfomation
  );
  const handleLogout = () => {
    dispatch(logoutActionStudio());
    alert("Đã đăng xuất");
  };
  return (
    <Layout>
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
                <Link to="/">home</Link>
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
              {Object.keys(userInfoStudio).length === 0 &&
                Object.keys(registeredUserInfomation).length === 0 && (
                  <>
                    <Menu.Item key="studio">
                      <Link
                        className={clsx(styles.menu_item)}
                        to="/registerstudio"
                      >
                        Register
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="loginstudio">
                      <Link
                        className={clsx(styles.menu_item)}
                        to="/loginstudio"
                      >
                        Login
                      </Link>
                    </Menu.Item>
                  </>
                )}
              {(Object.keys(userInfoStudio).length > 0 ||
                Object.keys(registeredUserInfomation).length > 0) && (
                <Button onClick={handleLogout}>Đăng xuất</Button>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HeaderStudio;
