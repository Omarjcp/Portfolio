import { useEffect, useState } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import { Menu } from "antd";
import {
  MailOutlined,
  HomeOutlined,
  ExperimentOutlined,
  SmileOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import "./style.scss";
import { BurgerMenu } from "./burgerMenu";

export const SideBar = () => {
  const location = useLocation();
  const history = useHistory();
  let locationCurrent = location.pathname;

  const [current, setCurrent] = useState(locationCurrent);

  const handleClick = (e) => {
    // history.push(`${e.key}`);
    // history.push(`${e.key}`);
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(locationCurrent);
  });

  return (
    <>
      <BurgerMenu />
      <div className="container-side">
        <Menu
          theme="dark"
          defaultSelectedKeys={["/"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          selectedKeys={[current]}
          inlineCollapsed={true}
          onClick={handleClick}
        >
          <Link to="/">
            <Menu.Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key="/"
              icon={
                <HomeOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                    marginLeft: "5px",
                  }}
                />
              }
            >
              {/* Inicio */}
            </Menu.Item>
          </Link>
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            to="/aboutme"
          >
            <Menu.Item
              key="/aboutme"
              icon={
                <SmileOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                    marginLeft: "5px",
                  }}
                />
              }
            >
              {/* Acerca de mi */}
            </Menu.Item>
          </Link>
          <Link to="/skills">
            <Menu.Item
              key="/skills"
              icon={
                <ReadOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                    marginLeft: "5px",
                  }}
                />
              }
            >
              {/* Skills */}
            </Menu.Item>
          </Link>
          <Link to="/projects">
            <Menu.Item
              key="/projects"
              icon={
                <ExperimentOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                    marginLeft: "5px",
                  }}
                />
              }
            >
              {/* Proyectos */}
            </Menu.Item>
          </Link>
          <Link to="/contactme">
            <Menu.Item
              key="/contactme"
              icon={
                <MailOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                    marginLeft: "5px",
                  }}
                />
              }
            >
              {/* Contacta me */}
            </Menu.Item>
          </Link>
        </Menu>
      </div>
    </>
  );
};
