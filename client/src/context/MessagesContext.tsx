import {
  createContext,
  ReactNode,
  useState,
  useContext,
  FC,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { MessageObject } from "../types/types";

interface MessagesContextInterface {
  messages: MessageObject[];
  setMessages: Dispatch<SetStateAction<MessageObject[]>>;
}

export const MessagesContext = createContext({} as MessagesContextInterface);

export const MessagesContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [messages, setMessages] = useState<MessageObject[]>([] as MessageObject[]);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return (
    <MessagesContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </MessagesContext.Provider>
  );
};
const useMessages = () => {
  return useContext(MessagesContext);
};

export default useMessages;
