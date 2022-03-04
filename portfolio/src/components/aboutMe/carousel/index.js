import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "antd";

import ImageOne from "./image1.png";
import ImageTwo from "./image2.png";
import ImageTree from "./image3.png";

import "./style.scss";

export const CarouselAboutMe = () => {
  const images = [ImageTree, ImageOne, ImageTwo];

  return (
    <Box>
      {/* <Carousel
        arrows={true}
        prevArrow={<LeftOutlined />}
        nextArrow={<RightOutlined />}
        autoplay
      >
        {images.map((img) => {
          return (
            <> */}
      <Image
        className="image-carrusel"
        backgroundSize="contain"
        src={ImageOne}
      />
      {/* </>
          );
        })}
      </Carousel> */}
    </Box>
  );
};
