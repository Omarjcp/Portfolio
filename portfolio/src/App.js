import { Route } from "react-router-dom";
import { ChatBotComponent } from "./components/chatBot";
import { Home } from "./components/home";

function App() {
  return (
    <>
      <Route exact path="/" render={() => <Home />} />
      <Route path="/" render={() => <ChatBotComponent />} />
    </>
  );
}

export default App;
