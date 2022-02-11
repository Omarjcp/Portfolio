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
  ReadOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export const BurgerMenu = () => {
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
          <MenuItem icon={<HomeOutlined />}>Inicio</MenuItem>
          <MenuDivider color="white" />
          <MenuItem icon={<SmileOutlined />}>Acerca de mi</MenuItem>
          <MenuDivider />
          <MenuItem icon={<ReadOutlined />}>Proyectos</MenuItem>
          <MenuDivider />
          <MenuItem icon={<ExperimentOutlined />}>Contacta me</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};
