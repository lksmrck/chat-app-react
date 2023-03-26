import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
  FC,
} from "react";

interface ChatContextInterface {
  currentConversation: any;
  setCurrentConversation: SetStateAction<any>;
}

const ChatContext = createContext({} as ChatContextInterface);

export const ChatContextProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [currentConversation, setCurrentConversation] = useState<any>({});

  /*   useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user): any => {
      setCurrentUser(user);
      console.log(user);
    });
  }); */

  return (
    <ChatContext.Provider
      value={{
        /*  user,
        setUser, */
        currentConversation,
        setCurrentConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export default ChatContext;
