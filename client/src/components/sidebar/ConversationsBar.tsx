//TODO: přidat google signOut

import { Button } from "@chakra-ui/react";
import { StyledConversationsBar } from "./styled";
import Navbar from "./ConversationsBarNavbar";
import Search from "./Search";
import ConversationList from "./conversations/ConversationList";
import { FC } from "react";

type ConversationBarProps = {
  widthAnimation?: boolean;
};

const ConversationsBar: FC<ConversationBarProps> = ({ widthAnimation }) => {
  return (
    <StyledConversationsBar widthAnimation={widthAnimation}>
      <Navbar />
      <Search />
      <ConversationList />
    </StyledConversationsBar>
  );
};

export default ConversationsBar;
