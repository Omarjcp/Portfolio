import { ArrowDownOutlined } from "@ant-design/icons";
import { Heading, Text } from "@chakra-ui/react";
import { SideBar } from "./sideBar";
import "./style.scss";

export const Home = () => {
  return (
    <div className="contain-main-home">
      <Heading className="title">
        <Text className="caseUpper">D</Text>esarrollador web
      </Heading>
      <Heading className="title">
        <Text className="caseUpper">F</Text>ullstack
      </Heading>
      <p className="title-name">Omar Castillo</p>
      <p className="subtitle">ReactJs - NodeJs</p>
      <div>
        <ArrowDownOutlined />
      </div>
    </div>
  );
};
