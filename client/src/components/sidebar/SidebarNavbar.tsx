import { StyledSidebarNavbar, Container } from "./styled";
import { IconButton } from "@chakra-ui/react";
import { FcExport, FcPlus } from "react-icons/fc";
import useUserAuth from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";

const SidebarNavbar = () => {
  const { googleSignOut } = useUserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledSidebarNavbar>
      <h1>chitCHAT</h1>
      <Container>
        <IconButton
          size="sm"
          aria-label="add conversation"
          icon={<FcPlus size={22} />}
        />
        <IconButton
          size="sm"
          aria-label="logout"
          icon={<FcExport size={22} />}
          onClick={handleSignOut}
        />
      </Container>
    </StyledSidebarNavbar>
  );
};

export default SidebarNavbar;
