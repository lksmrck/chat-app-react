import { FC } from "react";
import { ConversationObject } from "../../../types/types";
import useAuth from "../../../hooks/useAuth";
import useChat from "../../../hooks/useChat";
import {
  StyledConversation,
  StyledFriendName,
  StyledPreviewMessage,
  Container,
} from "./styled";

type ConversationProps = {
  conversation: ConversationObject;
};

const Conversation: FC<ConversationProps> = ({ conversation }) => {
  const { currentUser } = useAuth();
  const { setCurrentConversation } = useChat();

  const friendMemberNumber =
    currentUser.uid === conversation.member1id ? "member2" : "member1";

  const conversationClickHandler = () => {
    setCurrentConversation(conversation);
  };

  return (
    <StyledConversation onClick={conversationClickHandler}>
      <img
        src={eval(`conversation.${friendMemberNumber}photourl`)}
        width="50px"
        style={{ borderRadius: "50%" }}
      />
      <Container>
        <StyledFriendName>
          {eval(`conversation.${friendMemberNumber}name`)}
        </StyledFriendName>
        <StyledPreviewMessage>Some messageSOmmeMessage</StyledPreviewMessage>
      </Container>
    </StyledConversation>
  );
};

export default Conversation;
