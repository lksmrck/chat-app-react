import Message from "./Message";
import { StyledMessagesList } from "./styled";
import { useEffect } from "react";
import useChat from "../../hooks/useChat";
import useAuth from "../../hooks/useAuth";
import { getMessages } from "../../api";
import socket from "../../socket";
import useSocket from "../../hooks/useSocket";
import useMessages from "../../hooks/useMessages";

const MessagesList = () => {
  const { messages, setMessages } = useMessages();
  const { currentUser } = useAuth();
  const { currentConversation } = useChat();

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
      {messages.map((message: any) => {
        const isSent = currentUser.uid === message.sender_id ? true : false;

        return <Message key={message.time} text={message.text} sent={isSent} received={!isSent} />;
      })}
    </StyledMessagesList>
  );
};

export default MessagesList;
