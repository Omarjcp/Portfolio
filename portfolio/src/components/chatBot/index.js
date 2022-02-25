import { useHistory } from "react-router-dom";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import ImageBot from "../../images/meCaricature.png";

import "./style.scss";

export const ChatBotComponent = () => {
  const history = useHistory();

  const theme = {
    background: "rgb(236, 236, 236)",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#14E473",
    headerFontColor: "#3333333",
    headerFontSize: "20px",
    botBubbleColor: "#14E473",
    botFontColor: "#3333333",
    userBubbleColor: "#3333333",
    userFontColor: "#3333333",
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
            id: "3",
            message: "¡Hola! ¿Quieres conocer un poco sobre mí?",
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
              "Genial, gracias por pasarte a ver mi portafolio. ¡Un gusto conocerte! :D",
            end: true,
          },
          {
            id: "4",
            message: "A ver, ¿Qué te gustaría saber?",
            trigger: "5",
          },
          {
            id: "4.5",
            message: "¿Te gustaría conocer algo mas?",
            trigger: "4.1",
          },
          {
            id: "5",
            options: [
              {
                value: 1,
                label: "Acerca de tí",
                trigger: () => onClick("aboutme"),
              },
              {
                value: 2,
                label: "Tus skills",
                trigger: () => onClick("skills"),
              },
              {
                value: 3,
                label: "Tus proyectos",
                trigger: () => onClick("projects"),
              },
              { value: 4, label: "Contactarte", trigger: "9" },
            ],
          },
          {
            id: "9",
            message: "Genial, envíame un correo y te responderé a la brevedad.",
            trigger: () => onClick("contactme"),
          },
        ]}
      />
    </ThemeProvider>
  );
};
