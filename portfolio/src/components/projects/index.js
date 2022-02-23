import { GithubOutlined } from "@ant-design/icons/lib/icons";
import { ExternalLinkIcon, LinkIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Text,
  Image,
  IconButton,
  Collapse,
  Button,
  useDisclosure,
  Link,
} from "@chakra-ui/react";

import ImageDogPage from "./assets/iconsmall.png";
import ImageMetaPage from "./assets/Logo-Meta-Academy.png";

import "./style.scss";

export const Projects = () => {
  return (
    <Box id="projects" className="container-main-projects">
      <Box className="container-title-projects">
        <Heading className="title-projects">
          <Text className="case-upper-projects">P</Text>royectos realizados
        </Heading>
        <Text
          fontWeight="medium"
          marginTop=".7rem"
          lineHeight="7"
          fontSize="1rem"
          color="#c5c5c5"
        >
          Algunos proyectos que he realizado y de los que he podido ser parte!
        </Text>
      </Box>
      <Box className="container-cards-projects">
        <Box className="card-dog">
          <Image alt="image landing page my dog app" src={ImageDogPage} />
          <div class="info">
            <Heading>My dog app</Heading>
            <Text>
              Lorem Ipsum is simply dummy text from the printing and
              typesetinggsdddddddddddgsd gdsfgkohdsfgsd dsghsdfghd jkfgdfhg sdfg
              jksdfng jsdf jgkhsdfkjghjkdfhgjk dfg hfdghjkdfs gsdf industry
            </Text>
            <Box className="container-buttons-icons">
              <Link
                href="https://github.com/Omarjcp/PI-Dogs-FT_14b"
                target="_blank"
              >
                <IconButton icon={<GithubOutlined />} />
              </Link>
              <Link href="https://mydogs-b0f97.web.app/" target="_blank">
                <IconButton icon={<LinkIcon />} />
              </Link>
            </Box>
          </div>
        </Box>
        <Box className="card">
          <Image alt="image counter metacademy" src={ImageMetaPage} />
          <div class="info">
            <Heading>Contador Metacademy</Heading>
            <Text>
              Lorem Ipsum is simply dummy text from the printing and
              typesetinggsdddddddddddgsd gdsfgkohdsfgsd dsghsdfghd jkfgdfhg sdfg
              jksdfng jsdf jgkhsdfkjghjkdfhgjk dfg hfdghjkdfs gsdf industry
            </Text>
            <Box className="container-buttons-icons">
              <Link
                href="https://github.com/mamv2137/meta-energy-counter"
                target="_blank"
              >
                <IconButton icon={<GithubOutlined />} />
              </Link>
              <Link href="https://metacademyapp.web.app/" target="_blank">
                <IconButton icon={<LinkIcon />} />
              </Link>
            </Box>
          </div>
        </Box>
        <Box className="card-dog">
          <Image alt="image landing page my dog app" src={ImageDogPage} />
          <div class="info">
            <Heading>Portafolio</Heading>
            <Text>
              Lorem Ipsum is simply dummy text from the printing and
              typesetinggsdddddddddddgsd gdsfgkohdsfgsd dsghsdfghd jkfgdfhg sdfg
              jksdfng jsdf jgkhsdfkjghjkdfhgjk dfg hfdghjkdfs gsdf industry
            </Text>
            <Box className="container-buttons-icons">
              <Link href="https://github.com/Omarjcp/Portfolio" target="_blank">
                <IconButton icon={<GithubOutlined />} />
              </Link>
              <Link href="https://metacademyapp.web.app/" target="_blank">
                <IconButton icon={<LinkIcon />} />
              </Link>
            </Box>
          </div>
        </Box>
      </Box>
      <Box>
        <Text
          fontWeight="medium"
          marginTop="5rem"
          lineHeight="7"
          fontSize="1rem"
          color="#c5c5c5"
          padding="3rem"
        >
          Si quieres ver mi repositorio con proyectos de práctica, te dejo mi{" "}
          <Link href="https://github.com/Omarjcp/" isExternal>
            repo <ExternalLinkIcon />
          </Link>
        </Text>
      </Box>
    </Box>
  );
};
