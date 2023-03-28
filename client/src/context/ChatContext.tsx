import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect, FC } from "react";

interface ChatContextInterface {
  currentConversation: any;
  setCurrentConversation: SetStateAction<any>;
}

const ChatContext = createContext({} as ChatContextInterface);

export const ChatContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentConversation, setCurrentConversation] = useState<any>({});

  return (
    <ChatContext.Provider
      value={{
        currentConversation,
        setCurrentConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export default ChatContext;
