import Message from "./Message";
import { StyledMessagesList } from "./styled";
import { useEffect } from "react";
import useConversation from "../../context/ConversationContext";
import useAuth from "../../context/AuthContext";
import { getMessages } from "../../api";
import socket from "../../socket";
import useSocket from "../../hooks/useSocket";
import useMessages from "../../context/MessagesContext";
import ScrollToBottom from "react-scroll-to-bottom";

const MessagesList = () => {
  const { messages, setMessages } = useMessages();
  const { currentUser } = useAuth();
  const { currentConversation } = useConversation();

  useSocket();

  useEffect(() => {
    const joinChat = () => {
      socket.emit("join_chat", currentConversation.id);
    };

    const fetchMessages = async () => {
      joinChat();
      const unsub = await getMessages(currentConversation.id, (fetchedMessages: any) => {
        setMessages(fetchedMessages);
        console.log(fetchedMessages);
      });
      return () => unsub();
    };

    currentConversation.id && fetchMessages();
  }, [currentConversation, setMessages]);

  return (
    <StyledMessagesList>
      <ScrollToBottom className="ScrollToBottomStyles" scrollViewClassName="ScrollToBottomInitial">
        {messages
          .slice(0)
          .reverse()
          .map((message: any) => {
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
