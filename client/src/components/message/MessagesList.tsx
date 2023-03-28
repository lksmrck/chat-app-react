import Message from "./Message";
import { StyledMessagesList } from "./styled";
import { useEffect } from "react";
import useConversation from "../../context/ConversationContext";
import useAuth from "../../context/AuthContext";
import { getMessages } from "../../api";
import socket from "../../socket";
import useSocket from "../../hooks/useSocket";
import useMessages from "../../hooks/useMessages";
import ScrollToBottom from "react-scroll-to-bottom";

const MessagesList = () => {
  const { messages, setMessages } = useMessages();
  const { currentUser } = useAuth();
  const { currentConversation } = useConversation();

  useSocket();

  const joinRoom = () => {
    socket.emit("join_chat", currentConversation.id);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      joinRoom();
      const unsub = await getMessages(currentConversation.id, (fetchedMessages: any) =>
        setMessages(fetchedMessages)
      );
      return () => unsub();
    };

    currentConversation && fetchMessages();
  }, [currentConversation]);

  return (
    <StyledMessagesList>
      <ScrollToBottom className="ScrollToBottomStyles">
        {messages.map((message: any) => {
          const isSent = currentUser.uid === message.sender_id ? true : false;

          return (
            <Message key={message.time} text={message.text} sent={isSent} received={!isSent} />
          );
        })}
      </ScrollToBottom>
    </StyledMessagesList>
  );
};

export default MessagesList;
