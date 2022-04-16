import { useState } from "react";
import { Route, useLocation } from "react-router-dom";
import "./App.scss";
import "antd/dist/antd.css";
import { ChakraProvider } from "@chakra-ui/react";

import { ChatBotComponent } from "./components/chatBot";
import { Home } from "./components/home";
import { SideBar } from "./components/home/sideBar";
import { AboutMe } from "./components/aboutMe";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { ContactMe } from "./components/contactme";

function App() {
  const location = useLocation();
  let locationCurrent =
    location.pathname === "/" && location.hash === ""
      ? "/#home"
      : "/" + location.hash;

  const [current, setCurrent] = useState(locationCurrent);

  return (
    <ChakraProvider>
      <div className="container-app">
        <div className="figure-movil"></div>
        <div className="figure-movil-two"></div>
        <div className="figure-movil-three"></div>
        <div className="figure-movil-four"></div>
        <div className="figure-movil-five"></div>
        <div className="figure-movil-six"></div>
      </div>
      <Route exact path="/" render={() => <Home setCurrent={setCurrent} />} />
      <Route
        path="/"
        render={() => (
          <SideBar
            current={current}
            setCurrent={setCurrent}
            locationCurrent={locationCurrent}
          />
        )}
      />
      <Route path="/" render={() => <ChatBotComponent />} />
      <Route exact path="/aboutme" render={() => <AboutMe />} />
      <Route exact path="/skills" render={() => <Skills />} />
      <Route exact path="/projects" render={() => <Projects />} />
      <Route exact path="/contactme" render={() => <ContactMe />} />
    </ChakraProvider>
  );
}

export default App;
