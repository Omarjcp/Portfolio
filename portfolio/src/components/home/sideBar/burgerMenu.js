import {
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";

import "./style.scss";
import {
  ExperimentOutlined,
  HomeOutlined,
  MailOutlined,
  ReadOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export const BurgerMenu = ({ getPathToRedirect }) => {
  return (
    <div className="burgerMenu">
      <Menu>
        <MenuButton
          px={4}
          py={2}
          textColor="white"
          fontSize="2rem"
          transition="all 0.2s"
        >
          <HamburgerIcon />
        </MenuButton>
        <MenuList backgroundColor="#272727" borderColor="#272727">
          <a href={getPathToRedirect("#home")}>
            <MenuItem icon={<HomeOutlined />}>Inicio</MenuItem>
          </a>
          <MenuDivider />
          <a href={getPathToRedirect("#aboutme")}>
            <MenuItem icon={<SmileOutlined />}>Acerca de mi</MenuItem>
          </a>
          <MenuDivider />
          <a href={getPathToRedirect("#skills")}>
            <MenuItem icon={<ReadOutlined />}>Habilidades</MenuItem>
          </a>
          <MenuDivider />
          <a href={getPathToRedirect("#projects")}>
            <MenuItem icon={<ExperimentOutlined />}>Proyectos</MenuItem>
          </a>
          <MenuDivider />
          <a href={getPathToRedirect("#contactme")}>
            <MenuItem icon={<MailOutlined />}>Contacta me</MenuItem>
          </a>
        </MenuList>
      </Menu>
    </div>
  );
};
