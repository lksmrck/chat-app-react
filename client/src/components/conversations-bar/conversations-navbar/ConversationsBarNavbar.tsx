import { StyledConversationsBarNavbar, Container } from "../styled";
import { IconButton } from "@chakra-ui/react";
import { FcExport, FcPlus } from "react-icons/fc";
import useUserAuth from "../../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AddConversationModal from "../conversations/AddConversationModal";

const ConversationsBarNavbar = () => {
  const [isAddConversationModalOpen, setIsAddConversationModalOpen] = useState(false);

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
        <h1>chitCHAT</h1>
        <Container>
          <IconButton
            size="sm"
            aria-label="add conversation"
            icon={<FcPlus size={22} />}
            onClick={handleOpenModal}
          />
          <IconButton
            size="sm"
            aria-label="logout"
            icon={<FcExport size={22} />}
            onClick={handleSignOut}
          />
        </Container>
      </StyledConversationsBarNavbar>
      <AddConversationModal isOpen={isAddConversationModalOpen} onClose={handleCloseModal} />
    </>
  );
};

export default ConversationsBarNavbar;
