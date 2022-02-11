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
  return (
    <>
      <BurgerMenu />
      <div className="container-side">
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          inlineCollapsed={true}
        >
          <Menu.Item
            key="1"
            icon={
              <HomeOutlined style={{ color: "#BCB5AE", fontSize: "1.3rem" }} />
            }
          >
            Inicio
          </Menu.Item>
          <Menu.Item
            key="2"
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
            key="3"
            icon={
              <ReadOutlined style={{ color: "#BCB5AE", fontSize: "1.3rem" }} />
            }
          >
            Skills
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={
              <ExperimentOutlined
                style={{ color: "#BCB5AE", fontSize: "1.3rem" }}
              />
            }
          >
            Proyectos
          </Menu.Item>
          <Menu.Item
            key="5"
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
