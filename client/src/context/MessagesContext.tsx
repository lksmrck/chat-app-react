import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect, FC } from "react";

interface MessagesContextInterface {
  messages: any;
  setMessages: /* SetStateAction<any>; */ any;
}

const MessagesContext = createContext({} as MessagesContextInterface);

export const MessagesContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [messages, setMessages] = useState<any>([]);

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
export default MessagesContext;
