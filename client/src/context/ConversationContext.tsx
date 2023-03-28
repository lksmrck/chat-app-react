import { createContext, ReactNode, useState, SetStateAction, FC, useContext } from "react";

interface ConversationContextInterface {
  currentConversation: any;
  setCurrentConversation: SetStateAction<any>;
}

const ConversationContext = createContext({} as ConversationContextInterface);

export const ConversationContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentConversation, setCurrentConversation] = useState<any>({});

  return (
    <ConversationContext.Provider
      value={{
        currentConversation,
        setCurrentConversation,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

const useConversation = () => {
  return useContext(ConversationContext);
};

export default useConversation;
