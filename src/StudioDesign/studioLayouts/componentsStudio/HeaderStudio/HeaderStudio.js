import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Layout, Button, Popover } from "antd";
import { EyeFilled } from "@ant-design/icons";
import styles from "./HeaderStudio.module.css";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { logoutActionStudio } from "../../../../reduxSaga/actions/userActions";

function HeaderStudio() {
  const dispatch = useDispatch();

  const userReducerInitState = useSelector(
    (state) => state.userReducerInitState
  );
  const { userInfoStudio, registeredUserInfomation } = userReducerInitState;

  // const inforUser = useSelector((state) => state.dataRegister);
  // const { initRegister } = inforUser;

  const handleLogout = () => {
    alert("Đã đăng xuất");
    dispatch(logoutActionStudio());
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
              {userInfoStudio == null && registeredUserInfomation == null && (
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
                    <Link className={clsx(styles.menu_item)} to="/loginstudio">
                      Login
                    </Link>
                  </Menu.Item>
                </>
              )}
              {(userInfoStudio || registeredUserInfomation) && (
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