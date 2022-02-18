import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
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
    history.push(`${e.key}`);
    history.go(0);
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
          <Menu.Item
            key="/"
            icon={
              <HomeOutlined style={{ color: "#BCB5AE", fontSize: "1.3rem" }} />
            }
          >
            Inicio
          </Menu.Item>
          <Menu.Item
            key="/aboutme"
            icon={
              <SmileOutlined
                style={{
                  color: "#BCB5AE",
                  fontSize: "1.3rem",
                }}
              />
            }
          >
            Acerca de mi
          </Menu.Item>
          <Menu.Item
            key="/skills"
            icon={
              <ReadOutlined style={{ color: "#BCB5AE", fontSize: "1.3rem" }} />
            }
          >
            Skills
          </Menu.Item>
          <Menu.Item
            key="/projects"
            icon={
              <ExperimentOutlined
                style={{ color: "#BCB5AE", fontSize: "1.3rem" }}
              />
            }
          >
            Proyectos
          </Menu.Item>
          <Menu.Item
            key="/contactme"
            icon={
              <MailOutlined style={{ color: "#BCB5AE", fontSize: "1.3rem" }} />
            }
          >
            Contacta me
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};
