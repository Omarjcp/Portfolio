import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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

import logoOC from "../../../images/logoOC.png";

export const SideBar = ({ current, setCurrent, locationCurrent }) => {
  const location = useLocation();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(locationCurrent);
  }, [locationCurrent]);

  const getPathToRedirect = (screen) =>
    location.pathname !== "/" ? `/${screen}` : screen;

  return (
    <>
      <BurgerMenu getPathToRedirect={getPathToRedirect} />
      <div className="container-side">
        <img
          src={logoOC}
          style={{
            position: "absolute",
            top: "2rem",
            padding: ".6rem",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          selectedKeys={[current]}
          inlineCollapsed={true}
          onClick={handleClick}
        >
          <Menu.Item
            key={"/#home"}
            icon={
              <a href={getPathToRedirect("#home")}>
                <HomeOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
            }
          >
            Inicio
          </Menu.Item>
          <Menu.Item
            key={"/#aboutme"}
            icon={
              <a href={getPathToRedirect("#aboutme")}>
                <SmileOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
            }
          >
            Acerca de mi
          </Menu.Item>
          <Menu.Item
            key="/#skills"
            icon={
              <a href={getPathToRedirect("#skills")}>
                <ReadOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
            }
          >
            Habilidades
          </Menu.Item>
          <Menu.Item
            key="/#projects"
            icon={
              <a href={getPathToRedirect("#projects")}>
                <ExperimentOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
            }
          >
            Proyectos
          </Menu.Item>
          <Menu.Item
            key="/#contactme"
            icon={
              <a href={getPathToRedirect("#contactme")}>
                <MailOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
            }
          >
            Contactame
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};
