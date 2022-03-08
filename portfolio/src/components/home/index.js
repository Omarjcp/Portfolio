import { useEffect } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import { Heading, Text } from "@chakra-ui/react";
import { AboutMe } from "../aboutMe";
import { ContactMe } from "../contactme";
import { Projects } from "../projects";
import { Skills } from "../skills";
import { SideBar } from "./sideBar";
import { IntersectionObserverHook } from "../../intersectionObserver";

import caricatureMe from "../../images/meCaricature.png";
import "./style.scss";

export const Home = ({ setCurrent, current }) => {
  useEffect(() => {
    IntersectionObserverHook(
      "/#home",
      "home",
      setCurrent,
      "-400px 0px 0px 0px"
    );
  }, []);
  return (
    <>
      <div id="home" className="contain-main-home">
        <div className="contain-text-home">
          <h1 className="title">
            <p className="caseUpper">o</p>mar <p className="caseUpper">c</p>
            astillo
          </h1>
          <p className="title-name">Desarrollador web fullstack</p>
          <p className="subtitle">ReactJs - NodeJs</p>
        </div>
        <img className="img-caricature" src={caricatureMe} />
        <ArrowDownOutlined className="arrow-scroll" />
      </div>
      <AboutMe setCurrent={setCurrent} />
      <Skills setCurrent={setCurrent} />
      <Projects setCurrent={setCurrent} />
      <ContactMe setCurrent={setCurrent} />
    </>
  );
};
