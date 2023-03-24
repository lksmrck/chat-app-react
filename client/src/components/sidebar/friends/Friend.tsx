import React from "react";
import defaultPic from "../../../assets/Default_pfp.png";
import {
  StyledFriend,
  StyledFriendName,
  StyledPreviewMessage,
  Container,
} from "./styled";

const Friend = () => {
  return (
    <StyledFriend>
      <img src={defaultPic} width="70px" />
      <Container>
        <StyledFriendName>Friend Name</StyledFriendName>
        <StyledPreviewMessage>Some messageSOmmeMessage</StyledPreviewMessage>
      </Container>
    </StyledFriend>
  );
};

export default Friend;
