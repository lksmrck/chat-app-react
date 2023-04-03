import Conversation from "./Conversation";
import { StyledConversationList, ConversationsErrorMessage } from "./styled";
import { useEffect, useState, FC } from "react";
import useAuth from "../../../context/AuthContext";
import { getConversations } from "../../../api";
import { ConversationObject } from "../../../types/types";
import Spinner from "../../ui/Spinner";

type ConversationList = {
  conversationSearchTerm: string;
};

const ConversationList: FC<ConversationList> = ({ conversationSearchTerm }) => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const [allConversations, setAllConversations] = useState<ConversationObject[] | []>([]);
  const [filteredConversations, setFilteredConversations] = useState<ConversationObject[] | []>([]);
  /*      () => conversations */
  const [error, setError] = useState({ isError: false, message: "" });

  useEffect(() => {
    let sub = true;
    const fetchConversations = async () => {
      setLoading(true);

      try {
        if (sub) {
          const data = await getConversations(currentUser.uid);
          setAllConversations(data);
          setFilteredConversations(data);
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

  useEffect(() => {
    if (conversationSearchTerm.length === 0) setFilteredConversations(allConversations);

    const filteredArray = allConversations.filter((conversation) => {
      const otherMemberName =
        currentUser.uid === conversation.member1id
          ? conversation.member2name
          : conversation.member1name;

      return otherMemberName.toLowerCase().includes(conversationSearchTerm.toLowerCase());
    });

    setFilteredConversations(filteredArray);
  }, [conversationSearchTerm]);

  return (
    <StyledConversationList>
      {loading ? (
        <Spinner size={"xl"} />
      ) : error.isError ? (
        <ConversationsErrorMessage>
          <h3>{error.message}</h3>
        </ConversationsErrorMessage>
      ) : (
        filteredConversations.map((conversation: ConversationObject) => {
          return <Conversation key={conversation.id} conversation={conversation} />;
        })
      )}
    </StyledConversationList>
  );
};

export default ConversationList;
