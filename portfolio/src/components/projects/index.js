import { useEffect } from "react";
import { GithubOutlined } from "@ant-design/icons/lib/icons";
import { LinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Text, Image, IconButton, Link } from "@chakra-ui/react";

import ImageDogPage from "./assets/iconsmall.png";
import ImageMetaPage from "./assets/Logo-Meta-Academy.png";
import LogoOj from "../../images/meCaricatureTwo.png";
import LogoDulceSalao from "./assets/LogoDulceSalao.png";
import LogoQuizCountry from "./assets/iconQuizCountry.png";
import GaleryImages from "./assets/galeryimages.png";
import { IntersectionObserverHook } from "../../intersectionObserver";

import "./style.scss";

export const Projects = ({ setCurrent }) => {
  useEffect(() => {
    IntersectionObserverHook(
      "/#projects",
      "projects",
      setCurrent,
      "200px 0px 0px 0px"
    );
  }, []);
  return (
    <Box className="container-main-projects">
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
          id="projects"
        >
          Algunos proyectos que he realizado y de los que he podido ser parte!
        </Text>
      </Box>
      <Box className="container-cards-projects">
        <Box className="card-dog">
          <Image alt="image landing page my dog app" src={ImageDogPage} />
          <div className="info">
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
          <div className="info">
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
            padding="1rem"
            alt="Image dulce y salao"
            src={LogoQuizCountry}
          />
          <div className="info">
            <Heading>Country Quiz</Heading>
            <Text>
              Desafío en el cual pondrás a prueba cuantas capitales y banderas
              del mundo conoces realmente.
            </Text>
            <Box className="container-buttons-icons">
              <Text className="tecnologi-project-light-w35">React</Text>
              <Text className="tecnologi-project-light-w65">Ant Design</Text>
              <Text className="tecnologi-project-light-w35">Sass</Text>
              <Text className="tecnologi-project-light-w5">Axios</Text>
            </Box>

            <Box className="container-buttons-icons">
              <Link
                href="https://github.com/Omarjcp/Country-Quiz"
                target="_blank"
              >
                <IconButton
                  icon={<GithubOutlined style={{ fontSize: "1.18rem" }} />}
                />
              </Link>
              <Link href="https://country-quiz-93a82.web.app/" target="_blank">
                <IconButton icon={<LinkIcon />} />
              </Link>
            </Box>
          </div>
        </Box>
        <Box className="card">
          <Image
            className="img-galery"
            alt="Image dulce y salao"
            src={GaleryImages}
          />
          <div className="info">
            <Heading>Galery Images</Heading>
            <Text>
              Página web en la que subirás imagenes a una galería de fotos
              general, puedes ver tus imagenes en tu perfil, puedes ver tus
              datos con los que te registraste y puedes modificar estos datos
              posteriori.
            </Text>
            <Box className="container-buttons-icons">
              <Text className="tecnologi-project-light-w35">React</Text>
              <Text className="tecnologi-project-light-w45">Redux</Text>
              <Text className="tecnologi-project-light-w65">Ant Design</Text>
              <Text className="tecnologi-project-light-w35">Node</Text>
              <Text className="tecnologi-project-light-w5">Express</Text>
              <Text className="tecnologi-project-light-w5">MySQL</Text>
              <Text className="tecnologi-project-light-w10">
                Firebase Storage
              </Text>
            </Box>

            <Box className="container-buttons-icons">
              <Link
                href="https://github.com/Omarjcp/GaleryImages"
                target="_blank"
              >
                <IconButton
                  icon={<GithubOutlined style={{ fontSize: "1.18rem" }} />}
                />
              </Link>
              <Link href="https://challenge-fs-images.web.app/" target="_blank">
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
          <div className="info">
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
                href="https://github.com/Omarjcp/Dulce-Salao-Client"
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
          <div className="info">
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
    </Box>
  );
};
