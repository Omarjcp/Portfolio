import { ArrowDownOutlined } from "@ant-design/icons";
import { Heading, Text } from "@chakra-ui/react";
import { SideBar } from "./sideBar";
import "./style.scss";

export const Home = () => {
  return (
    <div className="contain-main-home">
      <Heading className="title">
        <Text className="caseUpper">o</Text>mar{" "}
        <Text className="caseUpper">c</Text>astillo
      </Heading>
      <p className="title-name">Desarrollador web fullstack</p>
      <p className="subtitle">ReactJs - NodeJs</p>
      <ArrowDownOutlined className="arrow-scroll" />
    </div>
  );
};
