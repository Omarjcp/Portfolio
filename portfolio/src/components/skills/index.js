import { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { TabsSkills } from "./tabsSkills";
import { IntersectionObserverHook } from "../../intersectionObserver";

import "./style.scss";

export const Skills = ({ setCurrent }) => {
  useEffect(() => {
    IntersectionObserverHook("/#skills", "skills", setCurrent, "0px");
  }, []);

  return (
    <Box className="container-main-skills">
      <Box className="container-skills">
        <Heading className="title-skills">
          <Text id="skills" className="case-upper-skills">
            M
          </Text>
          is habilidades...
        </Heading>
        <Box className="container-text-skills">
          <Text
            fontWeight="medium"
            marginTop=".7rem"
            lineHeight="7"
            fontSize="1rem"
            color="#c5c5c5"
          >
            Soy una persona disciplinada, constante, proactiva, amable y me
            gusta trabajar en equipo para poder así escuchar diferentes puntos
            de vista y aprender de ello.
          </Text>
          <Text
            fontWeight="medium"
            marginTop=".7rem"
            lineHeight="7"
            fontSize="1rem"
            color="#c5c5c5"
          >
            Soy desarrollador web fullstack con ReactJs y NodeJs.
          </Text>
          <Text
            fontWeight="medium"
            marginTop=".7rem"
            lineHeight="7"
            fontSize="1rem"
            color="#c5c5c5"
          >
            Te dejo aca abajo las tecnologías que manejo.
          </Text>
          <TabsSkills />
        </Box>
      </Box>
    </Box>
  );
};
