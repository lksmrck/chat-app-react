import MessagesList from "./message/MessagesList";
import SendMessageForm from "./sendMessageForm/SendMessageForm";
import ChatNavbar from "./ChatNavbar";
import { StyledChat } from "./styled";
import { MessagesContextProvider } from "../../context/MessagesContext";
import { FC } from "react";

type ChatProps = {
  handleClickBackToConversations: (screen: string) => void;
  showChat?: boolean;
};

const Chat: FC<ChatProps> = ({ handleClickBackToConversations, showChat }) => {
  return (
    <StyledChat showChat={showChat}>
      <ChatNavbar handleClickBackToConversations={handleClickBackToConversations} />
      <MessagesContextProvider>
        <MessagesList />
        <SendMessageForm />
      </MessagesContextProvider>
    </StyledChat>
  );
};

export default Chat;
