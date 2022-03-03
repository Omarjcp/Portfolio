import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "antd";

import { imageBackAndDb, imageFront, toolsWork } from "../assets/images";

import "./style.scss";

export const CarouselSkills = () => {
  return (
    <Box className="container-carousels">
      <Box className="container-front">
        <Carousel
        // arrows={true}
        // prevArrow={<LeftOutlined />}
        // nextArrow={<RightOutlined />}
        // autoplay
        >
          {imageFront.map((img) => {
            return (
              <div className="container-images" target="_blank">
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
