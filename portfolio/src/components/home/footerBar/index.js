import { useState, useEffect } from "react";

import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  SmileOutlined,
  ReadOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";

import "./index.scss";

export const FooterBar = ({
  getPathToRedirect,
  current,
  setCurrent,
  locationCurrent,
}) => {
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent({ current: e.key });
  };

  useEffect(() => {
    setCurrent(locationCurrent);
  }, [locationCurrent]);

  return (
    <div className="footer-menu">
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={["/"]}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item
          mode="inline"
          key={"/#home"}
          icon={
            <HomeOutlined
              style={{
                color: "#BCB5AE",
                fontSize: "1.1rem",
              }}
            />
          }
        >
          {/* <a href=""></a> */}
        </Menu.Item>
        <Menu.Item
          key={"/#aboutme"}
          icon={
            <SmileOutlined
              style={{
                color: "#BCB5AE",
                fontSize: "1.1rem",
              }}
            />
          }
        >
          {/* <a href=""></a> */}
        </Menu.Item>
        <Menu.Item
          key="/#skills"
          icon={
            <ReadOutlined
              style={{
                color: "#BCB5AE",
                fontSize: "1.1rem",
              }}
            />
          }
        >
          {/* <a href=""></a> */}
        </Menu.Item>
        <Menu.Item
          key="/#projects"
          icon={
            <ExperimentOutlined
              style={{
                color: "#BCB5AE",
                fontSize: "1.1rem",
              }}
            />
          }
        >
          {/* <a href=""></a> */}
        </Menu.Item>
        <Menu.Item
          key="/#contactme"
          icon={
            <MailOutlined
              style={{
                color: "#BCB5AE",
                fontSize: "1.1rem",
              }}
            />
          }
        >
          {/* <a href=""></a> */}
        </Menu.Item>
      </Menu>
    </div>
  );
};
