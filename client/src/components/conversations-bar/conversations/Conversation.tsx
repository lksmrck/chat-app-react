import { FC } from "react";
import { ConversationObject } from "../../../types/types";
import useAuth from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { StyledConversation, StyledFriendName, Container } from "./styled";
import useConversation from "../../../context/ConversationContext";
import { Avatar } from "@chakra-ui/react";

type ConversationProps = {
  conversation: ConversationObject;
};

const Conversation: FC<ConversationProps> = ({ conversation }) => {
  const { currentUser } = useAuth();
  const { setCurrentConversation } = useConversation();
  const navigate = useNavigate();

  const friendMemberNumber = currentUser.uid === conversation.member1id ? "member2" : "member1";

  const conversationClickHandler = () => {
    setCurrentConversation(conversation);
    navigate(`/messages/${conversation.id}`);
  };

  return (
    <StyledConversation onClick={conversationClickHandler}>
      <Avatar
        name={eval(`conversation.${friendMemberNumber}name`)}
        src={eval(`conversation.${friendMemberNumber}photourl`)}
        size="sm"
      />
      <Container>
        <StyledFriendName>{eval(`conversation.${friendMemberNumber}name`)}</StyledFriendName>
      </Container>
    </StyledConversation>
  );
};

export default Conversation;
