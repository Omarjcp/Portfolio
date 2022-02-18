import "./App.scss";
import { Route } from "react-router-dom";
import "antd/dist/antd.css";
import { ChakraProvider } from "@chakra-ui/react";

import ImageBackgrond from "./components/home/walpapaerdark.webp";

import { ChatBotComponent } from "./components/chatBot";
import { Home } from "./components/home";
import { SideBar } from "./components/home/sideBar";
import { AboutMe } from "./components/aboutMe";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";

function App() {
  return (
    <ChakraProvider>
      {/* <img className="container-app" src={ImageBackgrond} /> */}
      {/* <img
        className="container-app"
        src="https://upload-assets.vice.com/files/2015/09/08/1441746347GameL_Tribute_to_Adam_Martinakis_reverse.gif?crop=0.6296875xw:1xh;center,center"
      /> */}
      {/* <img
      className="container-app"
        src="https://c.tenor.com/Zys9j53G_lcAAAAC/gif-wallpaper.gif"
        /> */}
      <div className="container-app"></div>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/" render={() => <SideBar />} />
      <Route path="/" render={() => <ChatBotComponent />} />
      <Route exact path="/aboutme" render={() => <AboutMe />} />
      <Route exact path="/skills" render={() => <Skills />} />
      <Route exact path="/projects" render={() => <Projects />} />
    </ChakraProvider>
  );
}

export default App;
