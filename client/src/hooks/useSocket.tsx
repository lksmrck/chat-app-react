import { useEffect } from "react";
import socket from "../socket";
import useMessages from "../context/MessagesContext";
import { MessageObject } from "../types/types";

const useSocket = () => {
  const { setMessages } = useMessages();

  useEffect(() => {
    socket.connect();
    socket.on("connect_error", () => {
      //TODO: error handle socket connection
      console.log("nah");
    });

    socket.on("receive_message", (message) => {
      setMessages((prevMessages: MessageObject[]) => [...prevMessages, message]);
    });
    return () => {
      socket.off("connect_error");
      socket.off("receive_message");
    };
  }, [setMessages]);
};

export default useSocket;
