import { Box, Image } from "@chakra-ui/react";

import ImageOne from "./image1.png";

import "./style.scss";

export const CarouselAboutMe = () => {
  return (
    <Box>
      <Image
        className="image-carrusel"
        backgroundSize="contain"
        src={ImageOne}
      />
    </Box>
  );
};
