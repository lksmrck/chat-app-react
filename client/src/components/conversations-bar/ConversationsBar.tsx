//TODO: přidat google signOut

import { Button } from "@chakra-ui/react";
import { StyledConversationsBar } from "./styled";
import ConversationsBarNavbar from "./conversations-navbar/ConversationsBarNavbar";
import Search from "./search/Search";
import ConversationList from "./conversations/ConversationList";
import { FC, useState, ChangeEvent } from "react";

type ConversationBarProps = {
  chatShowed?: boolean;
};

const ConversationsBar: FC<ConversationBarProps> = ({ chatShowed }) => {
  const [conversationSearchTerm, setConversationSearchTerm] = useState("");

  const handleChangeConversationSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setConversationSearchTerm(e.target.value);
  };

  return (
    <StyledConversationsBar chatShowed={chatShowed}>
      <ConversationsBarNavbar chatShowed={chatShowed} />
      <Search handleChangeConversationSearchTerm={handleChangeConversationSearchTerm} />
      <ConversationList conversationSearchTerm={conversationSearchTerm} />
    </StyledConversationsBar>
  );
};

export default ConversationsBar;
