import MessagesList from "../message/MessagesList";
import SendMessageForm from "./sendMessageForm/SendMessageForm";
import ChatNavbar from "./ChatNavbar";
import { StyledChat } from "./styled";

const Chat = () => {
  return (
    <StyledChat>
      <ChatNavbar />
      <MessagesList />
      <SendMessageForm />
    </StyledChat>
  );
};

export default Chat;
