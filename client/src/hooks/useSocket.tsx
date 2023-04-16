import { useEffect, useState } from "react";
import socket from "../setups/socket";
import useMessages from "../context/MessagesContext";
import { MessageObject } from "../types/types";
import useConversation from "../context/ConversationContext";

const useSocket = () => {
  const { setMessages } = useMessages();
  const { setAllConversations } = useConversation();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    socket.connect();

    socket.on("connect_error", () => {
      //TODO: error handle socket connection
      setIsError(true);
    });

    socket.on("receive_message", (message) => {
      setMessages((prevMessages: MessageObject[]) => [...prevMessages, message]);
    });

    //TODO:
    socket.on("added__me_to_conversations", (conversations) => {
      setAllConversations(conversations);
    });

    return () => {
      socket.off("connect_error");
      socket.off("receive_message");
    };
  }, [setMessages]);

  return { isError, setIsError };
};

export default useSocket;
