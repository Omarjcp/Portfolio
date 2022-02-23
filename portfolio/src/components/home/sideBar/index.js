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
  let locationCurrent = "/" + location.hash;

  const [current, setCurrent] = useState(locationCurrent);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(locationCurrent);
    console.log(locationCurrent);
  }, [locationCurrent]);

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
          <Menu.Item
            key="/#home"
            icon={
              <a href="#home">
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
            key="/#aboutme"
            icon={
              <a href="#aboutme">
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
              <a href="#skills">
                <ReadOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
            }
          >
            Skills
          </Menu.Item>
          <Menu.Item
            key="/#projects"
            icon={
              <a href="#projects">
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
              <a href="#contactme">
                <MailOutlined
                  style={{
                    color: "#BCB5AE",
                    fontSize: "1.3rem",
                  }}
                />
              </a>
            }
          >
            Contacta me
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};
