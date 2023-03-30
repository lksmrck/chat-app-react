import {
  createContext,
  ReactNode,
  useState,
  SetStateAction,
  FC,
  useContext,
  Dispatch,
} from "react";
import { ConversationObject } from "../types/types";

interface ConversationContextInterface {
  currentConversation: ConversationObject;
  setCurrentConversation: Dispatch<SetStateAction<ConversationObject>>;
}

const ConversationContext = createContext({} as ConversationContextInterface);

export const ConversationContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentConversation, setCurrentConversation] = useState<ConversationObject>(
    {} as ConversationObject
  );

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
