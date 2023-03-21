import MessagesList from "../message/MessagesList";
import MessageInput from "./MessageInput";
import ChatTitle from "./ChatTitle";
import { StyledChat } from "./styled";

const Chat = () => {
  return (
    <StyledChat>
      <ChatTitle />
      <MessagesList />
      <MessageInput />
    </StyledChat>
  );
};

export default Chat;
