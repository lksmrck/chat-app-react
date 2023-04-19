import { useEffect, useState } from "react";
import socket from "../setups/socket";
import useMessages from "../context/MessagesContext";
import useConversation from "../context/ConversationContext";
import useAuth from "../context/AuthContext";

const useSocket = () => {
  const { currentUser } = useAuth();
  const { setMessages } = useMessages();
  const { setAllConversations } = useConversation();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const userID = currentUser.uid;
    socket.auth = { userID };
    socket.connect();

    socket.on("connect_error", () => {
      console.log("connect error");
      setIsError(true);
    });

    socket.on("process_error", (err) => {
      console.log(err);
      setIsError(true);
    });

    socket.on("receive_message", async (message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on("added__me_to_conversations", async (conversation) => {
      setAllConversations((prevConversations) => [...prevConversations, conversation]);
    });

    return () => {
      socket.off("connect_error");
      socket.off("process_error");
      socket.off("receive_message");
      socket.off("added_me_to_conversations");
    };
  }, [setMessages, setAllConversations]);

  return { isError, setIsError };
};

export default useSocket;
