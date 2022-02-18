import {
  Box,
  Heading,
  Text,
  Image,
  Collapse,
  Button,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

import ImageDogPage from "./assets/imageDogPag.png";

import "./style.scss";

export const Projects = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box className="container-main-projects">
      <Box className="container-first-project">
        <Link href="https://mydogs-b0f97.web.app/" target="_blank">
          <Image
            w="20rem"
            alt="image landing page my dog app"
            src={ImageDogPage}
            onClick={onToggle}
          />
        </Link>
        <Box color="white" bg="black" rounded="md" shadow="md">
          lorem ipsu
        </Box>
      </Box>
    </Box>
  );
};
