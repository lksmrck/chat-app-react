//TODO: přidat google signOut

import { Button } from "@chakra-ui/react";
import { StyledConversationsBar } from "./styled";
import Navbar from "./ConversationsBarNavbar";
import Search from "./Search";
import ConversationList from "./conversations/ConversationList";
import { FC } from "react";

type ConversationBarProps = {};

const ConversationsBar: FC<ConversationBarProps> = () => {
  return (
    <StyledConversationsBar>
      <Navbar />
      <Search />
      <ConversationList />
    </StyledConversationsBar>
  );
};

export default ConversationsBar;
