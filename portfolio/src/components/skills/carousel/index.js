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
          autoplay
        >
          {imageFront.map((img) => {
            return (
              <a href={img.link} target="_blank">
                <Image className="image-carrusel" src={img?.src} />
              </a>
            );
          })}
        </Carousel>
      </Box>
      <Box className="container-front">
        <Carousel
          // arrows={true}
          // prevArrow={<LeftOutlined />}
          // nextArrow={<RightOutlined />}
          autoplay
        >
          {imageBackAndDb.map((img) => {
            return (
              <a href={img.link} target="_blank">
                <Image className="image-carrusel" src={img?.src} />
              </a>
            );
          })}
        </Carousel>
      </Box>
      <Box className="container-front">
        <Carousel
          // arrows={true}
          // prevArrow={<LeftOutlined />}
          // nextArrow={<RightOutlined />}
          autoplay
        >
          {toolsWork.map((img) => {
            return (
              <a href={img.link} target="_blank">
                <Image className="image-carrusel" src={img?.src} />
              </a>
            );
          })}
        </Carousel>
      </Box>
    </Box>
  );
};
