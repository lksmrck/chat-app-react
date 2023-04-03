import { StyledChatNavbar, Container, ChatNavbarName } from "../styled";
import useConversation from "../../../context/ConversationContext";
import useAuth from "../../../context/AuthContext";
import { useMediaQuery } from "@chakra-ui/react";
import { device } from "../../../common/device";
import { IconButton } from "@chakra-ui/react";
import { FcDownLeft } from "react-icons/fc";
import { FC } from "react";

type ChatNavbarProps = {
  handleClickBackToConversations: (screen: string) => void;
};

const ChatNavbar: FC<ChatNavbarProps> = ({ handleClickBackToConversations }) => {
  const { currentConversation } = useConversation();
  const { currentUser } = useAuth();

  const [minMediumScreen] = useMediaQuery(device.md);

  const friendMemberNumber =
    currentUser.uid === currentConversation.member1id ? "member2" : "member1";

  const handleClickBackButton = () => handleClickBackToConversations("CONVERSATIONS");

  return (
    <StyledChatNavbar>
      {currentConversation.id && (
        <Container>
          <div>
            <img
              alt="profile-pic"
              width="30px"
              src={eval(`currentConversation.${friendMemberNumber}photourl`)}
              style={{ borderRadius: "50%" }}
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
