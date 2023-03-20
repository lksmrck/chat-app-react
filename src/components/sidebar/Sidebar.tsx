//TODO: přidat google signOut
import useUserAuth from "../../hooks/useUserAuth";
import { Button } from "@chakra-ui/react";
import { StyledSidebar } from "./styled";

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
      <Button onClick={handleSignOut} />
    </StyledSidebar>
  );
};

export default Sidebar;
