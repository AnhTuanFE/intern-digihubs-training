import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Menu, Button, Popover } from "antd";
import { EyeFilled, UserOutlined } from "@ant-design/icons";
import { enquireScreen } from "enquire-js";

const LOGO_URL =
  "https://gw.alipayobjects.com/zos/rmsportal/gVAKqIsuJCepKNbgbSwE.svg";
function HeaderStudio() {
  const [menuMode, setMenuMode] = useState("horizontal");
  const [menuVisible, setMenuVisible] = useState(false);
  useEffect(() => {
    enquireScreen((b) => {
      setMenuMode({ menuMode: b ? "inline" : "horizontal" });
    });
  });
  const menu = (
    <Menu mode={menuMode} id="nav" key="nav">
      <Menu.Item key="home">
        <a>home</a>
      </Menu.Item>
      <Menu.Item key="docs">
        <a>
          <span>docs</span>
        </a>
      </Menu.Item>
      <Menu.Item key="components">
        <a>components</a>
      </Menu.Item>
      {menuMode === "inline" && (
        <Menu.Item key="preview">
          <a
            target="_blank"
            href="http://preview.pro.ant.design/"
            rel="noopener noreferrer"
          >
            preview
          </a>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div id="header" className="header">
      {menuMode === "inline" ? (
        <Popover
          overlayClassName="popover-menu"
          placement="bottomRight"
          content={menu}
          trigger="click"
          visible={menuVisible}
          arrowPointAtCenter
          onVisibleChange={this.onMenuVisibleChange}
        >
          <button
            className="nav-phone-icon"
            type="menu"
            onClick={this.handleShowMenu}
            icon={<EyeFilled />}
          />
        </Popover>
      ) : null}
      <Row>
        <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
          <div id="logo" to="/">
            <img src={LOGO_URL} alt="logo" />
            <span>ANT DESIGN PRO</span>
          </div>
        </Col>
        <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
          <div className="header-meta">
            <div id="preview">
              <a
                id="preview-button"
                target="_blank"
                href="http://preview.pro.ant.design"
                rel="noopener noreferrer"
              >
                <Button icon={<EyeFilled />}>icon</Button>
              </a>
            </div>
            {menuMode === "horizontal" ? <div id="menu">{menu}</div> : null}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderStudio;
