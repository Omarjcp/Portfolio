import { useEffect } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CarouselSkills } from "./carousel";
import { IntersectionObserverHook } from "../../intersectionObserver";

import "./style.scss";

export const Skills = ({ setCurrent }) => {
  useEffect(() => {
    IntersectionObserverHook("/#skills", "skills", setCurrent, "0px");
  }, []);

  return (
    <Box id="skills" className="container-main-skills">
      <Box className="container-skills">
        <Heading className="title-skills">
          <Text className="case-upper-skills">M</Text>is habilidades...
        </Heading>
        <Box className="container-text-skills">
          <Text
            fontWeight="medium"
            marginTop=".7rem"
            lineHeight="7"
            fontSize="1rem"
            color="#c5c5c5"
          >
            Ahora que se que quieres saber de mis habilidades, pues te cuento un
            poco y te muestro ilustraciones sobre ello.
          </Text>
          <Text
            fontWeight="medium"
            marginTop=".7rem"
            lineHeight="7"
            fontSize="1rem"
            color="#c5c5c5"
          >
            Algunas de mis habilidades blandas o soft skills (aunque a mi me
            gusta llamarlos valores), soy una persona disciplinada, constante,
            amable y me gusta trabajar en equipo para poder así escuchar
            diferentes puntos de vista.
          </Text>
          <Text
            fontWeight="medium"
            marginTop=".7rem"
            lineHeight="7"
            fontSize="1rem"
            color="#c5c5c5"
          >
            Soy desarrollador web fullstack con ReactJs y NodeJs, hace mas de un
            año he estado en constante aprendizaje como autodidacta en HTML, CSS
            y Javascript.
          </Text>
          <Text
            fontWeight="medium"
            marginTop=".7rem"
            lineHeight="7"
            fontSize="1rem"
            color="#c5c5c5"
          >
            Te dejo aca abajo una pequeña galería de las imagenes en las que se
            ilustran las tecnologías y herramientas que uso a la hora de
            desarrollar.
          </Text>
          <CarouselSkills />
        </Box>
      </Box>
    </Box>
  );
};
