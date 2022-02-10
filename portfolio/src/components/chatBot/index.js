import { useHistory } from "react-router-dom";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import ImageBot from "./bot.png";

export const ChatBotComponent = () => {
  const history = useHistory();

  const theme = {
    background: "#D2D2D2",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#4DFF9E",
    headerFontColor: "#6E6E6E",
    headerFontSize: "20px",
    botBubbleColor: "#4DFF9E",
    botFontColor: "#6E6E6E",
    userBubbleColor: "#6E6E6E",
    userFontColor: "#4DFF9E",
  };

  const onClick = (screen) => {
    history.push(`/${screen}`);
    return "4.5";
  };
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating={true}
        botAvatar={ImageBot}
        steps={[
          {
            id: "1",
            message: "¿Hola, como estas? ¿Puedo saber cual es tu nombre?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message:
              "Un gusto conocerte {previousValue}! ¿Que te trae por acá, quieres conocer un poco sobre mi?",
            trigger: "4.1",
          },
          {
            id: "4.1",
            options: [
              { value: 1, label: "Si ¡Por supuesto!", trigger: "4" },
              { value: 2, label: "No, gracias.", trigger: "4.2" },
            ],
          },
          {
            id: "4.2",
            message:
              "Genial, Gracias por pasarte a ver mi portafolio. ¡Un gusto conocerte! :D",
            end: true,
          },
          {
            id: "4",
            message: "A ver, ¿Que quieres saber?",
            trigger: "5",
          },
          {
            id: "4.5",
            message: "Quieres conocer algo mas de mi?",
            trigger: "4.1",
          },
          {
            id: "5",
            options: [
              { value: 1, label: "Acerca de tí", trigger: "6" },
              { value: 2, label: "Tus skills", trigger: "7" },
              { value: 3, label: "Contactarnos", trigger: "8" },
            ],
          },
          {
            id: "6",
            message: "Ok, ahora puedes conocer un poco de mi.",
            trigger: () => onClick("aboutme"),
          },
          {
            id: "7",
            message: "Bien, sabrás un poco de mis conocimientos y habilidades.",
            trigger: () => onClick("myskills"),
          },
          {
            id: "8",
            message:
              "Genial, envíame un mail y te responderé lo mas rapido que pueda.",
            trigger: () => onClick("contactme"),
          },
        ]}
      />
    </ThemeProvider>
  );
};
