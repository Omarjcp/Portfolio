import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "antd";

import { imageFront } from "../assets/images";

import "./style.scss";

export const CarouselSkills = () => {
  return (
    <Box className="container-carousels">
      <Box className="container-front">
        <Carousel>
          {imageFront.map((img, i) => {
            return (
              <div key={i} className="container-images" target="_blank">
                <a href={img.link}>
                  <Image className="image-carrusel" src={img?.src} />
                </a>
                <a href={img.link2} target="_blank">
                  <Image className="image-carrusel-mid" src={img?.src2} />
                </a>
                <a href={img.link3} target="_blank">
                  <Image className="image-carrusel" src={img?.src3} />
                </a>
              </div>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};
