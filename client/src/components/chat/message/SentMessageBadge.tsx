import defaultPic from "../../assets/Default_pfp.png";
import { FC, useEffect, useState } from "react";
import { StyledSentMessageBadge, SentMessageBadgeText } from "./styled";
import useConversation from "../../../context/ConversationContext";
import useAuth from "../../../context/AuthContext";
import { getTime } from "../../../utils/utils";

type SentMessageBadgeProps = {
  sent?: boolean;
  received?: boolean;
  time: Date;
};

const SentMessageBadge: FC<SentMessageBadgeProps> = ({ sent, received, time }) => {
  /*   const [photourl, setPhotourl] = useState(""); */
  const { currentConversation } = useConversation();
  const { currentUser } = useAuth();

  let photourl;
  if (sent) {
    photourl = currentUser.photoURL;
  } else if (received) {
    currentUser.uid === currentConversation.member1id
      ? (photourl = currentConversation.member2photourl)
      : (photourl = currentConversation.member1photourl);
  }

  return (
    <StyledSentMessageBadge>
      <img alt="profile-pic" width="25px" src={photourl} style={{ borderRadius: "50%" }} />
      <SentMessageBadgeText>{getTime(time)}</SentMessageBadgeText>
    </StyledSentMessageBadge>
  );
};

export default SentMessageBadge;
