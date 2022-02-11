import "./App.scss";
import { Route } from "react-router-dom";
import "antd/dist/antd.css";
import { ChakraProvider } from "@chakra-ui/react";

import { ChatBotComponent } from "./components/chatBot";
import { Home } from "./components/home";
import { SideBar } from "./components/home/sideBar";

function App() {
  return (
    <ChakraProvider>
      <div className="container-app">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/" render={() => <SideBar />} />
        <Route path="/" render={() => <ChatBotComponent />} />
      </div>
    </ChakraProvider>
  );
}

export default App;
