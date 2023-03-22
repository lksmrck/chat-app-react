//TODO: přidat google signOut
import useUserAuth from "../../hooks/useUserAuth";
import { Button } from "@chakra-ui/react";
import { StyledSidebar } from "./styled";
import SidebarTitle from "./SidebarTitle";
import Search from "./Search";

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
      <SidebarTitle />
      <Search />
      {/*  <Button onClick={handleSignOut} /> */}
    </StyledSidebar>
  );
};

export default Sidebar;
