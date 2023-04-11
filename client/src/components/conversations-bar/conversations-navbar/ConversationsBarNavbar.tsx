import {
  StyledConversationsBarNavbar,
  ContentContainer,
  ButtonsContainer,
  NavbarContent,
} from "./styled";
import { IconButton } from "@chakra-ui/react";
import { FcExport, FcPlus } from "react-icons/fc";
import useUserAuth from "../../../hooks/useUserAuth";
import { useState } from "react";
import AddConversationModal from "../conversations/AddConversationModal";
import useAuth from "../../../context/AuthContext";
import { stringGuard } from "../../../utils/utils";

const ConversationsBarNavbar = () => {
  const [isAddConversationModalOpen, setIsAddConversationModalOpen] = useState(false);
  const { currentUser } = useAuth();

  const { googleSignOut } = useUserAuth();

  const handleSignOut = async () => {
    /*    try { */
    googleSignOut();
    /*    } catch (error) {
      console.log(error);
    }*/
  };

  const handleOpenModal = () => {
    setIsAddConversationModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsAddConversationModalOpen(false);
  };

  return (
    <>
      <StyledConversationsBarNavbar>
        <NavbarContent>
          <h6>You're logged as</h6>
          <ContentContainer>
            <img src={currentUser.photoURL} width="22px" style={{ borderRadius: "50%" }} />
            <h1>{stringGuard(currentUser.displayName, 15)}</h1>
          </ContentContainer>
        </NavbarContent>
        <ButtonsContainer>
          <IconButton
            size="sm"
            aria-label="add-conversation"
            icon={<FcPlus size={22} />}
            onClick={handleOpenModal}
          />
          <IconButton
            size="sm"
            aria-label="logout"
            icon={<FcExport size={22} />}
            onClick={handleSignOut}
          />
        </ButtonsContainer>
      </StyledConversationsBarNavbar>
      <AddConversationModal isOpen={isAddConversationModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ConversationsBarNavbar;
