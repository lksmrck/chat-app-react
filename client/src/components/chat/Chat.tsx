import MessagesList from "../message/MessagesList";
import SendMessageForm from "./sendMessageForm/SendMessageForm";
import ChatNavbar from "./ChatNavbar";
import { StyledChat } from "./styled";
import useAuth from "../../hooks/useAuth";

const Chat = () => {
  const { currentUser } = useAuth();
  return (
    <StyledChat>
      <ChatNavbar />
      <MessagesList />
      <SendMessageForm />
    </StyledChat>
  );
};

export default Chat;
