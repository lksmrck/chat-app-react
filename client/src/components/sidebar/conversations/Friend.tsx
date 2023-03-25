import React from "react";
import defaultPic from "../../../assets/Default_pfp.png";
import {
  StyledConversation,
  StyledFriendName,
  StyledPreviewMessage,
  Container,
} from "./styled";

const Conversation = () => {
  return (
    <StyledConversation>
      <img src={defaultPic} width="70px" />
      <Container>
        <StyledFriendName>Friend Name</StyledFriendName>
        <StyledPreviewMessage>Some messageSOmmeMessage</StyledPreviewMessage>
      </Container>
    </StyledConversation>
  );
};

export default Conversation;
