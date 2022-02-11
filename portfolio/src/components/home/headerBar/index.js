import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./style.scss";

export const HeaderBar = () => {
  const location = useLocation();
  const history = useHistory();
  let locationCurrent = location.pathname;

  const [current, setCurrent] = useState(locationCurrent);

  const handleClick = (e) => {
    history.push(`${e.key}`);
    setCurrent(e.key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="/" icon={<MailOutlined />}>
        Inicio
      </Menu.Item>
      <Menu.Item key="/aboutme" icon={<AppstoreOutlined />}>
        Acerca de mi
      </Menu.Item>
      <Menu.Item key="/projects" icon={<SettingOutlined />}>
        Proyectos
      </Menu.Item>
      <Menu.Item key="/contactme">Contacta me</Menu.Item>
    </Menu>
  );
};
