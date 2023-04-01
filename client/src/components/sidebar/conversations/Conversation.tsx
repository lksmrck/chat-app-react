import { FC } from "react";
import { ConversationObject } from "../../../types/types";
import useAuth from "../../../context/AuthContext";

import { StyledConversation, StyledFriendName, Container } from "./styled";
import useConversation from "../../../context/ConversationContext";

type ConversationProps = {
  conversation: ConversationObject;
};

const Conversation: FC<ConversationProps> = ({ conversation }) => {
  const { currentUser } = useAuth();
  const { setCurrentConversation } = useConversation();

  const friendMemberNumber = currentUser.uid === conversation.member1id ? "member2" : "member1";

  const conversationClickHandler = () => {
    setCurrentConversation(conversation);
  };

  return (
    <StyledConversation onClick={conversationClickHandler}>
      <img
        alt="profile-pic"
        src={eval(`conversation.${friendMemberNumber}photourl`)}
        width="50px"
        style={{ borderRadius: "50%" }}
      />
      <Container>
        <StyledFriendName>{eval(`conversation.${friendMemberNumber}name`)}</StyledFriendName>
      </Container>
    </StyledConversation>
  );
};

export default Conversation;
