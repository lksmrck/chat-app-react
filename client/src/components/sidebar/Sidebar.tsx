//TODO: přidat google signOut
import useUserAuth from "../../hooks/useUserAuth";
import { Button } from "@chakra-ui/react";
import { StyledSidebar } from "./styled";
import Navbar from "./SidebarNavbar";
import Search from "./Search";
import FriendsList from "./friends/FriendsList";

const Sidebar = () => {
  const { googleSignOut } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledSidebar>
      <Navbar />
      <Search />
      <FriendsList />
      {/*  <Button onClick={handleSignOut} /> */}
    </StyledSidebar>
  );
};

export default Sidebar;
