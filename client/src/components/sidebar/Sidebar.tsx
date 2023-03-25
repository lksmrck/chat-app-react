//TODO: přidat google signOut

import { Button } from "@chakra-ui/react";
import { StyledSidebar } from "./styled";
import Navbar from "./SidebarNavbar";
import Search from "./Search";
import ConversationList from "./conversations/ConversationList";

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Navbar />
      <Search />
      <ConversationList />
      {/*  <Button onClick={handleSignOut} /> */}
    </StyledSidebar>
  );
};

export default Sidebar;
