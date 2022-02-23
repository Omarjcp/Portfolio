import { ArrowDownOutlined } from "@ant-design/icons";
import { Heading, Text } from "@chakra-ui/react";
import { AboutMe } from "../aboutMe";
import { ContactMe } from "../contactme";
import { Projects } from "../projects";
import { Skills } from "../skills";
import { SideBar } from "./sideBar";
import "./style.scss";

export const Home = () => {
  return (
    <>
      <div className="contain-main-home">
        <h1 className="title">
          <p className="caseUpper">o</p>mar <p className="caseUpper">c</p>
          astillo
        </h1>
        <p className="title-name">Desarrollador web fullstack</p>
        <p className="subtitle">ReactJs - NodeJs</p>
        <ArrowDownOutlined className="arrow-scroll" />
      </div>
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
};
