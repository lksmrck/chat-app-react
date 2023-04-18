import defaultPic from "../../assets/Default_pfp.png";
import { FC, useEffect, useState } from "react";
import { StyledSentMessageBadge, SentMessageBadgeText } from "./styled";
import useConversation from "../../../context/ConversationContext";
import useAuth from "../../../context/AuthContext";
import { getTime } from "../../../utils/utils";
import { auth } from "../../../setups/firebase";
import { Avatar } from "@chakra-ui/react";

type SentMessageBadgeProps = {
  sent?: boolean;
  received?: boolean;
  time: Date | string;
};

const SentMessageBadge: FC<SentMessageBadgeProps> = ({ sent, received, time }) => {
  /*   const [photourl, setPhotourl] = useState(""); */
  const { currentConversation } = useConversation();
  const { currentUser } = useAuth();

  let userObject = {} as { name: string; photoURL: string };
  if (sent) {
    userObject = { name: currentUser.displayName, photoURL: currentUser.photoURL };
  } else if (received) {
    currentUser.uid === currentConversation.member1id
      ? (userObject = {
          name: currentConversation.member2name,
          photoURL: currentConversation.member2photourl,
        })
      : (userObject = {
          name: currentConversation.member1name,
          photoURL: currentConversation.member1photourl,
        });
  }

  return (
    <StyledSentMessageBadge>
      <Avatar name={userObject.name} src={userObject.photoURL} size="sm" />
      <SentMessageBadgeText>{getTime(time)}</SentMessageBadgeText>
    </StyledSentMessageBadge>
  );
};

export default SentMessageBadge;
