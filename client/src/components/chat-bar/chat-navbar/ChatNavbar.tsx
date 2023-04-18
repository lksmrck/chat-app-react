import { StyledChatNavbar, Container, ChatNavbarName } from "../styled";
import useConversation from "../../../context/ConversationContext";
import useAuth from "../../../context/AuthContext";
import { useMediaQuery } from "@chakra-ui/react";
import { device_min } from "../../../common/device";
import { IconButton } from "@chakra-ui/react";
import { FcDownLeft } from "react-icons/fc";
import { FC } from "react";
import { Avatar } from "@chakra-ui/react";

type ChatNavbarProps = {
  handleClickBackToConversations: (screen: string) => void;
};

const ChatNavbar: FC<ChatNavbarProps> = ({ handleClickBackToConversations }) => {
  const { currentConversation } = useConversation();
  const { currentUser } = useAuth();

  const [minMediumScreen] = useMediaQuery(device_min.md);

  const friendMemberNumber =
    currentUser.uid === currentConversation.member1id ? "member2" : "member1";

  const handleClickBackButton = () => handleClickBackToConversations("CONVERSATIONS");

  return (
    <StyledChatNavbar>
      {currentConversation.id && (
        <Container>
          <div>
            <Avatar
              name={eval(`currentConversation.${friendMemberNumber}name`)}
              src={eval(`currentConversation.${friendMemberNumber}photourl`)}
              size="sm"
            />
            <ChatNavbarName>{eval(`currentConversation.${friendMemberNumber}name`)}</ChatNavbarName>
          </div>
          {!minMediumScreen && (
            <IconButton
              size="sm"
              aria-label="logout"
              icon={<FcDownLeft size={22} />}
              onClick={handleClickBackButton}
            />
          )}
        </Container>
      )}
    </StyledChatNavbar>
  );
};

export default ChatNavbar;
