import MessagesList from "./message/MessagesList";
import SendMessageForm from "./sendMessageForm/SendMessageForm";
import ChatNavbar from "./ChatNavbar";
import { StyledChat } from "./styled";
import { MessagesContextProvider } from "../../context/MessagesContext";
import { FC } from "react";

type ChatProps = {
  handleClickBackToConversations: (screen: string) => void;
};

const Chat: FC<ChatProps> = ({ handleClickBackToConversations }) => {
  return (
    <StyledChat>
      <ChatNavbar handleClickBackToConversations={handleClickBackToConversations} />
      <MessagesContextProvider>
        <MessagesList />
        <SendMessageForm />
      </MessagesContextProvider>
    </StyledChat>
  );
};

export default Chat;
