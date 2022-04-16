import { useEffect } from "react";

import { Menu } from "antd";
import {
  MailOutlined,
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
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(locationCurrent);
  }, [locationCurrent]);

  return (
    <div className="footer-menu">
      <Menu
        theme="dark"
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
            <a href={getPathToRedirect("#home")}>
              <HomeOutlined
                style={{
                  color: "#BCB5AE",
                  fontSize: "1.1rem",
                }}
              />
            </a>
          }
        ></Menu.Item>
        <Menu.Item
          key={"/#aboutme"}
          icon={
            <a href={getPathToRedirect("#aboutme")}>
              <SmileOutlined
                style={{
                  color: "#BCB5AE",
                  fontSize: "1.1rem",
                }}
              />
            </a>
          }
        ></Menu.Item>
        <Menu.Item
          key="/#skills"
          icon={
            <a href={getPathToRedirect("#skills")}>
              <ReadOutlined
                style={{
                  color: "#BCB5AE",
                  fontSize: "1.1rem",
                }}
              />
            </a>
          }
        ></Menu.Item>
        <Menu.Item
          key="/#projects"
          icon={
            <a href={getPathToRedirect("#projects")}>
              <ExperimentOutlined
                style={{
                  color: "#BCB5AE",
                  fontSize: "1.1rem",
                }}
              />
            </a>
          }
        ></Menu.Item>
        <Menu.Item
          key="/#contactme"
          icon={
            <a href={getPathToRedirect("#contactme")}>
              <MailOutlined
                style={{
                  color: "#BCB5AE",
                  fontSize: "1.1rem",
                }}
              />
            </a>
          }
        ></Menu.Item>
      </Menu>
    </div>
  );
};
