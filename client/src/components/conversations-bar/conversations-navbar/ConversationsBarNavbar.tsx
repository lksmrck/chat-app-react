import {
  StyledConversationsBarNavbar,
  ContentContainer,
  ButtonsContainer,
  NavbarContent,
} from "./styled";
import { IconButton } from "@chakra-ui/react";
import { FcExport, FcPlus } from "react-icons/fc";
import useUserAuth from "../../../hooks/useUserAuth";
import { useState, FC } from "react";
import AddConversationModal from "../conversations/AddConversationModal";
import useAuth from "../../../context/AuthContext";
import { stringGuard } from "../../../utils/utils";
import { useMediaQuery } from "@chakra-ui/react";
import { device_max, device_min } from "../../../common/device";
import { Avatar } from "@chakra-ui/react";

type ConversationsBarNavbarProps = {
  chatShowed?: boolean;
};

const ConversationsBarNavbar: FC<ConversationsBarNavbarProps> = ({ chatShowed }) => {
  const [isAddConversationModalOpen, setIsAddConversationModalOpen] = useState(false);
  const { currentUser } = useAuth();

  const { googleSignOut } = useUserAuth();

  const [minMediumScreen] = useMediaQuery(device_min.md);
  const [minLargeScreen] = useMediaQuery(device_min.lg);
  const [minXLargeScreen] = useMediaQuery(device_min.xl);

  const [maxMediumScreen] = useMediaQuery(device_max.md);
  const [maxLargeScreen] = useMediaQuery(device_max.lg);
  const [maxXLargeScreen] = useMediaQuery(device_max.xl);

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

  const displayedName = () => {
    let numOfLetters;

    switch (true) {
      case minMediumScreen && maxLargeScreen && chatShowed:
        numOfLetters = 4;
        break;
      case minMediumScreen && maxLargeScreen && !chatShowed:
        numOfLetters = 19;
        break;
      case maxMediumScreen:
        numOfLetters = 19;
        break;
      case maxLargeScreen && chatShowed:
        numOfLetters = 15;
        break;
      case minXLargeScreen:
        numOfLetters = 35;
        break;
      case minLargeScreen && maxXLargeScreen && chatShowed:
        numOfLetters = 12;
        break;
      default:
        numOfLetters = 20;
    }

    return <h1>{stringGuard(currentUser.displayName, numOfLetters)}</h1>;
  };

  return (
    <>
      <StyledConversationsBarNavbar>
        <NavbarContent>
          <h6>You're logged as</h6>
          <ContentContainer>
            <Avatar name={currentUser.displayName} src={currentUser.photoURL} size="xs" />
            {displayedName()}
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
