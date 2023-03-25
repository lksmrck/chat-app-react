import { StyledForm } from "./styled";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { sendMessage } from "../../../api";
import useAuth from "../../../hooks/useAuth";

const SendMessageForm = () => {
  const [message, setMessage] = useState("");

  const { currentUser } = useAuth();

  const inputChangeHandler = (e: any) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const messageObject = {
      sender: currentUser.uid,
      text: message,
      date: new Date(),
    }; //TODO: updavit date format
    sendMessage(messageObject);
    setMessage("");
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        variant="outline"
        placeholder="Type something..."
        focusBorderColor="#71AE21"
        borderTopRadius="0"
        size="md"
        value={message}
        onChange={inputChangeHandler}
      />
    </StyledForm>
  );
};

export default SendMessageForm;
