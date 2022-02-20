import { useState } from "react";

import { Steps, Button, message, Form, Input } from "antd";
import { Box } from "@chakra-ui/react";
import { validateEmail } from "./validation";

import "./style.scss";

const { Step } = Steps;

const steps = [
  {
    title: "Email",
    content: (
      <Form.Item
        className="container-input-email"
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input name="email" placeholder="Email" required />{" "}
      </Form.Item>
    ),
  },
  {
    title: "Nombre",
    content: (
      <Form.Item
        className="container-input-name"
        name={["user", "name"]}
        label="Nombre o alias (opcional)"
      >
        <Input placeholder="Nombre" name="name" />{" "}
      </Form.Item>
    ),
  },
  {
    title: "Last",
    content: (
      <Form.Item
        className="container-input-name"
        name={["user", "name"]}
        label="Mensaje"
      >
        <Input.TextArea placeholder="Mensaje" name="msg" />
      </Form.Item>
    ),
  },
];

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} es requerido!",
  types: {
    email: "${label} no es un email! valido",
  },
};
/* eslint-enable no-template-curly-in-string */

export const ContactMe = () => {
  const [msgContact, setMsgContact] = useState({
    name: "",
    email: "",
    msg: "",
  });

  console.log(msgContact);

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onChange = (e) => {
    console.log(e.target);
    setMsgContact({ ...msgContact, [e.target.name]: e.target.value });
  };

  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
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
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          {steps[current].content}
          <div className="steps-action">
            {current < steps.length - 1 && validateEmail(msgContact.email) ? (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            ) : (
              <Button disabled type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
                htmlType="submit"
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </Form>
      </Box>
    </Box>
  );
};
