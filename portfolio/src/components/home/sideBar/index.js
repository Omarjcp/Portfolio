import { Menu } from "antd";
import {
  MailOutlined,
  HomeOutlined,
  UserOutlined,
  RadarChartOutlined,
  ExperimentOutlined,
  IdcardOutlined,
  SmileOutlined,
  ReadOutlined,
} from "@ant-design/icons";
import "./style.scss";

// const { SubMenu } = Menu;

export const SideBar = () => {
  //   const [collapsed, setCollapsed] = useState(false);

  //   const toggleCollapsed = () => {
  //     setCollapsed(!collapsed);
  //   };

  return (
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
        {/* <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu> */}
      </Menu>
    </div>
  );
};
