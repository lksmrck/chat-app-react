import Message from "./Message";
import { StyledMessagesList } from "./styled";
import { useEffect, useState } from "react";
import useChat from "../../hooks/useChat";
import useAuth from "../../hooks/useAuth";
import { getMessages } from "../../api";

const MessagesList = () => {
  const [messages, setMessages] = useState<any>([]);

  const { currentUser } = useAuth();
  const { currentConversation } = useChat();

  useEffect(() => {
    const fetchMessages = async () => {
      const unsub = await getMessages(
        currentConversation.id,
        (fetchedMessages: any) => setMessages(fetchedMessages)
      );
      return () => unsub();
    };

    currentConversation && fetchMessages();
  }, [currentConversation]);

  return (
    <StyledMessagesList>
      {messages.map((message: any) => {
        const isSent = currentUser.uid === message.sender_id ? true : false;

        return (
          <Message
            key={message.time}
            text={message.text}
            sent={isSent}
            received={!isSent}
          />
        );
      })}
    </StyledMessagesList>
  );
};

export default MessagesList;
