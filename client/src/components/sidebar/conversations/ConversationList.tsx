import Conversation from "./Conversation";
import { StyledConversationList } from "./styled";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getConversations } from "../../../api";
import { ConversationObject } from "../../../types/types";

const ConversationList = () => {
  const { currentUser } = useAuth();
  const [conversations, setConversations] = useState<ConversationObject[] | []>(
    []
  );

  useEffect(() => {
    const fetchConversations = async () => {
      const unsub = await getConversations(
        currentUser.uid,
        (fetchedData: ConversationObject[]) => setConversations(fetchedData)
      );

      if (!unsub) return;
      return () => unsub();
    };

    currentUser.uid && fetchConversations();
  }, [currentUser.uid]);
  return (
    <StyledConversationList>
      {conversations.map((conversation: ConversationObject) => {
        return (
          <Conversation key={conversation.id} conversation={conversation} />
        );
      })}
    </StyledConversationList>
  );
};

export default ConversationList;
