import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "antd";

import ImageOne from "./image1.png";
import ImageTwo from "./image2.jpeg";
import ImageTree from "./image3.jpg";

import "./style.scss";

export const CarouselAboutMe = () => {
  const images = [ImageOne, ImageTwo, ImageTree];

  return (
    <Box>
      <Carousel
        arrows={true}
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        autoplay
      >
        {images.map((img) => {
          return (
            <>
              <Image
                className="image-carrusel"
                backgroundSize="auto"
                src={img}
              />
            </>
          );
        })}
      </Carousel>
    </Box>
  );
};
