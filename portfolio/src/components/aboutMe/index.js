import { ArrowDownOutlined } from "@ant-design/icons";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { CarouselAboutMe } from "./carousel";

import "./style.scss";

export const AboutMe = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="aboutme"
    >
      <Box className="container-aboutme">
        <Heading className="title-aboutme">
          <Text className="caseUpper">U</Text>n poco sobre de mi...
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
              Desarrollador web fullstack con ReactJs y NodeJs, graduado en{" "}
              <Link href="https://www.soyhenry.com/" isExternal>
                SoyHenry <ExternalLinkIcon />
              </Link>{" "}
              una experiencia maravillosa en la cual no solo adquirí
              conocimientos técnicos muy importantes, sino tambien que me ayudó
              a fortalecer y ampliar mi capacidad analítica, la cual es de suma
              importancia a la hora de resolver problemas.
            </Text>
            <Text
              fontWeight="medium"
              marginTop=".7rem"
              lineHeight="7"
              fontSize="1rem"
              color="#c5c5c5"
            >
              Soy un apasionado por el desarrollo y la evolución personal, me
              encantan los deportes, pienso que es muy importante no solo
              mantener una mente activa y totalmente sana, es de suma
              importancia ser una persona integra, y mantener un balance sano
              entre cuerpo y mente.
            </Text>
          </Box>
          <Box className="container-carrusel">
            <CarouselAboutMe />
          </Box>
        </Box>
      </Box>
      <ArrowDownOutlined className="arrow-scroll-about" />
    </Box>
  );
};
