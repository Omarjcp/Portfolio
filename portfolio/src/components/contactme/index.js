import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";

import { Steps, Button, message, Form, Input } from "antd";
import { Box } from "@chakra-ui/react";
import { validateEmail } from "./validation";

import "./style.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Step } = Steps;

const steps = [
  {
    title: "Correo",
    content: (
      <Form.Item
        className="container-input-email"
        label="Correo"
        name="email"
        rules={[{ type: "email", required: true }]}
      >
        <Input name="email" placeholder="Correo" required />
      </Form.Item>
    ),
  },
  {
    title: "Nombre",
    content: (
      <Form.Item
        className="container-input-name"
        label="Nombre o alias (opcional)"
        name="name"
      >
        <Input placeholder="Nombre" name="name" />
      </Form.Item>
    ),
  },
  {
    title: "Mensaje",
    content: (
      <Form.Item
        className="container-input-name"
        name="message"
        label="Mensaje"
      >
        <Input.TextArea placeholder="Mensaje" name="message" value="" />
      </Form.Item>
    ),
  },
];

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} es requerido!",
  types: {
    email: "No es un correo! válido",
  },
};
/* eslint-enable no-template-curly-in-string */

export const ContactMe = () => {
  const [msgContact, setMsgContact] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Msj de contacto Portafolio",
  });

  const history = useHistory();

  const [form] = Form.useForm();

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = async (values) => {
    try {
      const msgEmail = await emailjs.send(
        "default_service",
        "contact_form",
        msgContact,
        "user_yNmimQYukJvALDqga5CxK"
      );
    } catch (error) {
      console.log("error", error);
    }

    setMsgContact({ name: "", email: "", message: "" });
    form.resetFields();
    history.go(0);
  };

  const onChange = (e) => {
    setMsgContact({ ...msgContact, [e.target.name]: e.target.value });
  };

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      id="contactme"
    >
      <Box w="60%">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Form
          className="steps-content"
          name="nest-messages"
          onChange={onChange}
          onFinish={() => onFinish(msgContact)}
          validateMessages={validateMessages}
          form={form}
        >
          {steps[current].content}
          <div className="steps-action">
            {current > 0 && (
              <Button style={{ marginRight: ".8rem" }} onClick={() => prev()}>
                <ArrowLeftOutlined />
              </Button>
            )}
            {current < steps.length - 1 && validateEmail(msgContact.email) ? (
              <Button
                style={{
                  marginRight: ".8rem",
                  backgroundColor: "rgb(210, 70, 253)",
                  border: "none",
                  letterSpacing: "2px",
                  fontWeight: "500",
                }}
                size="middle"
                type="primary"
                onClick={() => next()}
              >
                Siguiente
              </Button>
            ) : (
              <></>
            )}
            {msgContact.message.length < 3 ? (
              <></>
            ) : (
              <Button
                type="primary"
                style={{
                  backgroundColor: "rgb(210, 70, 253)",
                  border: "none",
                  letterSpacing: "2px",
                  fontWeight: "500",
                }}
                size="middle"
                onClick={() =>
                  message.success("Tu mensaje fue enviado correctamente!")
                }
                htmlType="submit"
              >
                Enviar
              </Button>
            )}
          </div>
        </Form>
      </Box>
    </Box>
  );
};
