import { StyledChatNavbar, Container, ChatNavbarName } from "./styled";
import defaultPic from "../../assets/Default_pfp.png";
import useConversation from "../../context/ConversationContext";
import useAuth from "../../context/AuthContext";

const ChatNavbar = () => {
  const { currentConversation } = useConversation();
  const { currentUser } = useAuth();

  const friendMemberNumber =
    currentUser.uid === currentConversation.member1id ? "member2" : "member1";

  return (
    <StyledChatNavbar>
      <Container>
        <img
          alt="profile-pic"
          width="30px"
          src={eval(`currentConversation.${friendMemberNumber}photourl`)}
          style={{ borderRadius: "50%" }}
        />
        <ChatNavbarName>{eval(`currentConversation.${friendMemberNumber}name`)}</ChatNavbarName>
      </Container>
    </StyledChatNavbar>
  );
};

export default ChatNavbar;
