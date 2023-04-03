import Message from "./Message";
import { StyledMessagesList } from "./styled";
import { useEffect, useState } from "react";
import useConversation from "../../../context/ConversationContext";
import useAuth from "../../../context/AuthContext";
import { getMessages } from "../../../api";
import socket from "../../../setups/socket";
import useSocket from "../../../hooks/useSocket";
import useMessages from "../../../context/MessagesContext";
import ScrollToBottom from "react-scroll-to-bottom";
import { MessageObject } from "../../../types/types";
import Spinner from "../../ui/Spinner";
import { MessagesListErrorMessage } from "./styled";

const MessagesList = () => {
  const { messages, setMessages } = useMessages();
  const { currentUser } = useAuth();
  const { currentConversation } = useConversation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, message: "" });

  //Initialization connection
  useSocket();

  useEffect(() => {
    setLoading(true);
    let sub = true;
    const joinChat = () => {
      socket.emit("join_chat", currentConversation.id);
    };

    const fetchMessages = async () => {
      joinChat();

      try {
        if (sub) {
          const data = await getMessages(currentConversation.id);

          setMessages(data);

          if (!data) return;
          setLoading(false);
        }
      } catch (error) {
        console.log("ERROR");
        setLoading(false);
        setError({ isError: true, message: "Messages could not be fetched." });
      }
    };

    currentConversation.id && fetchMessages();

    return () => {
      sub = false;
      setLoading(false);
    };
  }, [currentConversation, setMessages]);

  return (
    <StyledMessagesList>
      {loading && currentConversation.id ? (
        <Spinner size={"xl"} />
      ) : error.isError ? (
        <MessagesListErrorMessage>
          <h3>{error.message}</h3>
        </MessagesListErrorMessage>
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
                  data-testid="message-component"
                />
              );
            })}
        </ScrollToBottom>
      )}
    </StyledMessagesList>
  );
};

export default MessagesList;
