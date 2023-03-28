import { useContext } from "react";
import MessagesContext from "../context/MessagesContext";

const useMessages = () => {
  return useContext(MessagesContext);
};

export default useMessages;
