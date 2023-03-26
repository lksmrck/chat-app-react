import { StyledChatNavbar, Container, ChatNavbarName } from "./styled";
import defaultPic from "../../assets/Default_pfp.png";
import useChat from "../../hooks/useChat";
import useAuth from "../../hooks/useAuth";

const ChatNavbar = () => {
  const { currentConversation } = useChat();
  const { currentUser } = useAuth();

  const friendMemberNumber =
    currentUser.uid === currentConversation.member1id ? "member2" : "member1";

  return (
    <StyledChatNavbar>
      <Container>
        <img
          width="30px"
          src={eval(`currentConversation.${friendMemberNumber}photourl`)}
          style={{ borderRadius: "50%" }}
        />
        <ChatNavbarName>
          {eval(`currentConversation.${friendMemberNumber}name`)}
        </ChatNavbarName>
      </Container>
    </StyledChatNavbar>
  );
};

export default ChatNavbar;
