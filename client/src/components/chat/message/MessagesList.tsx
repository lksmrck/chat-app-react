import Message from "./Message";
import { StyledMessagesList } from "./styled";
import { useEffect, useState } from "react";
import useConversation from "../../../context/ConversationContext";
import useAuth from "../../../context/AuthContext";
import { getMessages } from "../../../api";
import socket from "../../../socket";
import useSocket from "../../../hooks/useSocket";
import useMessages from "../../../context/MessagesContext";
import ScrollToBottom from "react-scroll-to-bottom";
import { MessageObject } from "../../../types/types";
import Spinner from "../../ui/Spinner";

const MessagesList = () => {
  const { messages, setMessages } = useMessages();
  const { currentUser } = useAuth();
  const { currentConversation } = useConversation();
  const [loading, setLoading] = useState(false);

  useSocket();

  useEffect(() => {
    setLoading(true);
    const joinChat = () => {
      socket.emit("join_chat", currentConversation.id);
    };

    const fetchMessages = async () => {
      joinChat();
      const unsub = await getMessages(
        currentConversation.id,
        (fetchedMessages: MessageObject[]) => {
          setMessages(fetchedMessages);
          setLoading(false);
        }
      );
      return () => unsub();
    };

    currentConversation.id && fetchMessages();
  }, [currentConversation, setMessages]);

  return (
    <StyledMessagesList>
      {loading && currentConversation.id ? (
        <Spinner size={"xl"} />
      ) : (
        <ScrollToBottom
          className="ScrollToBottomStyles"
          scrollViewClassName="ScrollToBottomInitial"
        >
          {messages
            .slice(0)
            .reverse()
            .map((message: MessageObject) => {
              const isSent = currentUser.uid === message.sender_id ? true : false;

              return (
                <Message
                  key={message.text}
                  text={message.text}
                  sent={isSent}
                  received={!isSent}
                  time={message.time}
                />
              );
            })}
        </ScrollToBottom>
      )}
    </StyledMessagesList>
  );
};

export default MessagesList;
