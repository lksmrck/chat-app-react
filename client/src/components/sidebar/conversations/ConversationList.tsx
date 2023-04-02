import Conversation from "./Conversation";
import { StyledConversationList, ConversationsErrorMessage } from "./styled";
import { useEffect, useState, FC } from "react";
import useAuth from "../../../context/AuthContext";
import { getConversations } from "../../../api";
import { ConversationObject } from "../../../types/types";
import Spinner from "../../ui/Spinner";

type ConversationList = {};

const ConversationList: FC<ConversationList> = () => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const [conversations, setConversations] = useState<ConversationObject[] | []>([]);
  const [error, setError] = useState({ isError: false, message: "" });

  useEffect(() => {
    let sub = true;
    const fetchConversations = async () => {
      setLoading(true);

      try {
        if (sub) {
          const data = await getConversations(currentUser.uid);

          setConversations(data);
          setLoading(false);

          if (!data) return;
        }
      } catch (error) {
        setLoading(false);
        setError({ isError: true, message: "Conversations could not be fetched." });
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
      ) : error.isError ? (
        <ConversationsErrorMessage>
          <h3>{error.message}</h3>
        </ConversationsErrorMessage>
      ) : (
        conversations.map((conversation: ConversationObject) => {
          return <Conversation key={conversation.id} conversation={conversation} />;
        })
      )}
    </StyledConversationList>
  );
};

export default ConversationList;
