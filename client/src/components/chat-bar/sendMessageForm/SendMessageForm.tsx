import { StyledForm } from "./styled";
import { Button, Input, FormControl } from "@chakra-ui/react";
import { useState, ChangeEvent, FormEvent, FC } from "react";
import useAuth from "../../../context/AuthContext";
import socket from "../../../setups/socket";
import useMessages from "../../../context/MessagesContext";
import useConversation from "../../../context/ConversationContext";
import { theme } from "../../../common/theme";
import { MessageObject } from "../../../types/types";
import { IconButton } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

const SendMessageForm: FC = () => {
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState(false);

  const { currentUser } = useAuth();
  const { currentConversation } = useConversation();
  const { setMessages } = useMessages();

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormError(false);
    setMessage(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (message.length < 1) {
      setFormError(true);
      return;
    }

    const userIsMember1 = currentUser.uid === currentConversation.member1id;

    const messageObject = {
      sender_id: currentUser.uid,
      receiver_id:
        userIsMember1 === true ? currentConversation.member2id : currentConversation.member1id,
      conversation_id: currentConversation.id,
      text: message,
      time: new Date(),
    }; //TODO: updavit date format
    setMessages((prevMessages: MessageObject[]) => [...prevMessages, messageObject]);
    socket.emit("send_message", messageObject);
    setMessage("");
  };

  return (
    <StyledForm onSubmit={submitHandler} data-testid="message-form">
      <FormControl isInvalid={formError} className="container">
        <Input
          variant="outline"
          placeholder="Type something..."
          focusBorderColor={theme.color.green}
          size="md"
          value={message}
          onChange={inputChangeHandler}
          style={{ width: "80%", marginLeft: "1em" }}
          borderRadius={18}
        />
        <IconButton
          colorScheme="teal"
          type="submit"
          size="md"
          aria-label="send-message"
          icon={<AiOutlineSend size={22} color="#ffff" />}
        />
      </FormControl>
    </StyledForm>
  );
};

export default SendMessageForm;
