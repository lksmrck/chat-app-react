import MessagesList from "../message/MessagesList";
import SendMessageForm from "./sendMessageForm/SendMessageForm";
import ChatNavbar from "./ChatNavbar";
import { StyledChat } from "./styled";
import { MessagesContextProvider } from "../../context/MessagesContext";

const Chat = () => {
  return (
    <StyledChat>
      <ChatNavbar />
      <MessagesContextProvider>
        <MessagesList />
        <SendMessageForm />
      </MessagesContextProvider>
    </StyledChat>
  );
};

export default Chat;
