import Conversation from "./Conversation";
import { StyledConversationList } from "./styled";
import { useEffect, useState } from "react";
import useAuth from "../../../context/AuthContext";
import { getConversations } from "../../../api";
import { ConversationObject } from "../../../types/types";
import Spinner from "../../ui/Spinner";

const ConversationList = () => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const [conversations, setConversations] = useState<ConversationObject[] | []>([]);

  useEffect(() => {
    setLoading(true);
    const fetchConversations = async () => {
      const unsub = await getConversations(currentUser.uid, (fetchedData: ConversationObject[]) => {
        setConversations(fetchedData);
        setLoading(false);
      });

      if (!unsub) return;
      return () => unsub();
    };

    currentUser.uid && fetchConversations();
  }, [currentUser.uid]);
  return (
    <StyledConversationList>
      {loading ? (
        <Spinner size={"xl"} />
      ) : (
        conversations.map((conversation: ConversationObject) => {
          return <Conversation key={conversation.id} conversation={conversation} />;
        })
      )}
    </StyledConversationList>
  );
};

export default ConversationList;
