import defaultPic from "../../assets/Default_pfp.png";
import { StyledSendTimeBadge, SendTimeBadgeText } from "./styled";
import useConversation from "../../context/ConversationContext";
import useAuth from "../../context/AuthContext";

const SentTimeBadge = () => {
  const { currentConversation } = useConversation();
  const { currentUser } = useAuth();

  const friendMemberNumber =
    currentUser.uid === currentConversation.member1id ? "member2" : "member1";

  return (
    <StyledSendTimeBadge>
      <img
        alt="profile-pic"
        width="30px"
        src={eval(`currentConversation.${friendMemberNumber}photourl`)}
      />
      <SendTimeBadgeText>just now</SendTimeBadgeText>
    </StyledSendTimeBadge>
  );
};

export default SentTimeBadge;
