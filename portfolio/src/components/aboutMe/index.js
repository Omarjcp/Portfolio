import { useEffect, useState } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { CarouselAboutMe } from "./carousel";
import { IntersectionObserverHook } from "../../intersectionObserver";

import "./style.scss";

export const AboutMe = ({ setCurrent }) => {
  useEffect(() => {
    IntersectionObserverHook(
      "/#aboutme",
      "aboutme",
      setCurrent,
      "100px 0px -100px 0px"
    );
  }, []);

  return (
    <Box
      w="100%"
      // h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="aboutme"
      id="aboutme"
    >
      <Box className="container-aboutme">
        <Heading className="title-aboutme">
          <Text className="caseUpper">U</Text>n poco sobre de mí...
        </Heading>
        <Box className="second-container-aboutme">
          <Box className="container-text">
            <Text
              fontWeight="medium"
              lineHeight="7"
              fontSize="1rem"
              color="#c5c5c5"
            >
              Como ya habrás visto, mi nombre es Omar Castillo, tengo 26 años de
              edad. Soy el segundo de 3 hermanos.
            </Text>
            <Text
              fontWeight="medium"
              marginTop=".7rem"
              lineHeight="7"
              fontSize="1rem"
              color="#c5c5c5"
            >
              Me desempeño como desarrollador web fullstack con ReactJs y
              NodeJs, graduado en{" "}
              <Link href="https://www.soyhenry.com/" isExternal>
                SoyHenry <ExternalLinkIcon />
              </Link>{" "}
              una experiencia maravillosa en la cual no solo adquirí
              conocimientos técnicos muy importantes, sino tambien que me ayudó
              a fortalecer y ampliar mi capacidad analítica.
            </Text>
            <Text
              fontWeight="medium"
              marginTop=".7rem"
              lineHeight="7"
              fontSize="1rem"
              color="#c5c5c5"
            >
              Soy un apasionado por el desarrollo y la evolución personal, me
              encantan los deportes, pienso que es muy importante mantener una
              mente activa y un cuerpo sano.
            </Text>
          </Box>
          <Box className="container-carrusel">
            <CarouselAboutMe />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
