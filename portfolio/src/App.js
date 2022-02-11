import { Route } from "react-router-dom";
import "antd/dist/antd.css";

import { ChatBotComponent } from "./components/chatBot";
import { Home } from "./components/home";
import { SideBar } from "./components/home/sideBar";

function App() {
  return (
    <div
      style={{ backgroundColor: "#080808", width: "100vw", height: "100vh" }}
    >
      <Route path="/" render={() => <SideBar />} />
      <Route path="/" render={() => <Home />} />
      <Route path="/" render={() => <ChatBotComponent />} />
    </div>
  );
}

export default App;
