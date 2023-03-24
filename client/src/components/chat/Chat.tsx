import MessagesList from "../message/MessagesList";
import MessageInput from "./messageInput/MessageInput";
import ChatNavbar from "./ChatNavbar";
import { StyledChat } from "./styled";

const Chat = () => {
  return (
    <StyledChat>
      <ChatNavbar />
      <MessagesList />
      <MessageInput />
    </StyledChat>
  );
};

export default Chat;
