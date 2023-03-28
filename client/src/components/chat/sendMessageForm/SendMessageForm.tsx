import { StyledForm } from "./styled";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import useAuth from "../../../context/AuthContext";
import socket from "../../../socket";
import useMessages from "../../../hooks/useMessages";
import useConversation from "../../../context/ConversationContext";

const SendMessageForm = () => {
  const [message, setMessage] = useState("");

  const { currentUser } = useAuth();
  const { currentConversation } = useConversation();
  const { setMessages } = useMessages();

  const inputChangeHandler = (e: any) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const userIsMember1 = currentUser.uid === currentConversation.member1id;

    const messageObject = {
      sender_id: currentUser.uid,
      receiver_id:
        userIsMember1 === true ? currentConversation.member2id : currentConversation.member1id,
      conversation_id: currentConversation.id,
      text: message,
      time: new Date(),
    }; //TODO: updavit date format
    setMessages((prevMessages: any) => [...prevMessages, messageObject]);
    socket.emit("send_message", messageObject);
    setMessage("");
  };

  return (
    <StyledForm onSubmit={submitHandler}>
      <Input
        variant="outline"
        placeholder="Type something..."
        focusBorderColor="#71AE21"
        /*  borderTopRadius="0" */
        size="md"
        value={message}
        onChange={inputChangeHandler}
        style={{ width: "80%", marginLeft: "1em" }}
        borderRadius={18}
      />
    </StyledForm>
  );
};

export default SendMessageForm;
