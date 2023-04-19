import MessagesList from "./messages/MessagesList";
import SendMessageForm from "./sendMessageForm/SendMessageForm";
import ChatNavbar from "./chat-navbar/ChatNavbar";
import { StyledChatBar } from "./styled";
import { MessagesContextProvider } from "../../context/MessagesContext";
import { FC } from "react";

type ChatProps = {
  handleClickBackToConversations: (screen: string) => void;
  showChat: boolean;
};

const ChatBar: FC<ChatProps> = ({ handleClickBackToConversations, showChat }) => {
  return (
    <StyledChatBar showChat={showChat}>
      <ChatNavbar handleClickBackToConversations={handleClickBackToConversations} />
      <MessagesList />
      <SendMessageForm showChat={showChat} />
    </StyledChatBar>
  );
};

export default ChatBar;
