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
import LogoOj from "../../images/meCaricatureTwo.png";
import LogoDulceSalao from "./assets/LogoDulceSalao.png";

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
              Página web de búsqueda y creación de razas de perros, consumiendo
              API externa y creando una base de datos propia para la
              persistencia de datos{<br />}
            </Text>
            <Box className="container-buttons-icons">
              <Text className="tecnologi-project-light-w35">React</Text>
              <Text className="tecnologi-project-light-w45">Redux</Text>
              <Text className="tecnologi-project-light-w10">
                Styled Component
              </Text>
              <Text className="tecnologi-project-light-w35">Node</Text>
              <Text className="tecnologi-project-light-w5">Express</Text>
              <Text className="tecnologi-project-light-w6">Postgresql</Text>
            </Box>
            <Box className="container-buttons-icons">
              <Link
                href="https://github.com/Omarjcp/PI-Dogs-FT_14b"
                target="_blank"
              >
                <IconButton
                  icon={<GithubOutlined style={{ fontSize: "1.18rem" }} />}
                />
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
              Aplicación realizada para academia de Axie Infinity el cual tiene
              como finalidad contar energias, cartas, y dinero en el juego.
              {<br />}
            </Text>
            <Box className="container-buttons-icons">
              <Text className="tecnologi-project-dark-w35">React</Text>
              <Text className="tecnologi-project-dark-w65">Chackra Ui</Text>
              <Text className="tecnologi-project-dark-w35">Sass</Text>
            </Box>
            <Box className="container-buttons-icons">
              <Link
                href="https://github.com/mamv2137/meta-energy-counter"
                target="_blank"
              >
                <IconButton
                  icon={<GithubOutlined style={{ fontSize: "1.18rem" }} />}
                />
              </Link>
              <Link href="https://metacademyapp.web.app/" target="_blank">
                <IconButton icon={<LinkIcon />} />
              </Link>
            </Box>
          </div>
        </Box>
        <Box className="card">
          <Image
            className="img-dulce"
            alt="Image dulce y salao"
            src={LogoDulceSalao}
          />
          <div class="info">
            <Heading>Dulce y Salao</Heading>
            <Text>
              Página web en la que se muestran productos de panadería,
              repostería y pastelería venezolana, para su posterior pedido por
              medio de whatsapp
            </Text>
            <Box className="container-buttons-icons">
              <Text className="tecnologi-project-light-w35">React</Text>
              <Text className="tecnologi-project-light-w45">Redux</Text>
              <Text className="tecnologi-project-light-w65">Chackra Ui</Text>
              <Text className="tecnologi-project-light-w65">Ant Design</Text>
              <Text className="tecnologi-project-light-w35">Node</Text>
              <Text className="tecnologi-project-light-w5">Express</Text>
              <Text className="tecnologi-project-light-w5">MySQL</Text>
            </Box>

            <Box className="container-buttons-icons">
              <Link
                href="https://github.com/Omarjcp/DulceYSalado-Client"
                target="_blank"
              >
                <IconButton
                  icon={<GithubOutlined style={{ fontSize: "1.18rem" }} />}
                />
              </Link>
              {/* <Link href="">
                <IconButton icon={<LinkIcon />} />
              </Link> */}
            </Box>
          </div>
        </Box>
        <Box className="card">
          <Image alt="Caricature of me" src={LogoOj} />
          <div class="info">
            <Heading>Portafolio</Heading>
            <Text>
              Página web personal en la que muestro un poco sobre mi, las
              habilidades que poseo y algunos de los proyectos que he realizado
              hasta el momento
            </Text>
            <Box className="container-buttons-icons">
              <Text className="tecnologi-project-dark-w35">React</Text>
              <Text className="tecnologi-project-dark-w65">Chackra Ui</Text>
              <Text className="tecnologi-project-dark-w65">Ant Design</Text>
              <Text className="tecnologi-project-dark-w35">Sass</Text>
            </Box>

            <Box className="container-buttons-icons">
              <Link href="https://github.com/Omarjcp/Portfolio" target="_blank">
                <IconButton
                  icon={<GithubOutlined style={{ fontSize: "1.18rem" }} />}
                />
              </Link>
              <Link href="#home">
                <IconButton icon={<LinkIcon />} />
              </Link>
            </Box>
          </div>
        </Box>
      </Box>
      {/* <Box>
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
      </Box> */}
    </Box>
  );
};
