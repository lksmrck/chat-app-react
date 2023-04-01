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
    let sub = true;
    const fetchConversations = async () => {
      setLoading(true);
      if (sub) {
        const data = await getConversations(currentUser.uid);

        setConversations(data);
        setLoading(false);

        if (!data) return;
      }
    };

    currentUser.uid && fetchConversations();

    return () => {
      sub = false;
    };
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
