import { FC } from "react";
import SentTimeBadge from "./SentTimeBadge";
import { StyledMessage, MessageContainer } from "./styled";

type MessageProps = {
  received?: boolean;
  sent?: boolean;
  text: string;
};

const Message: FC<MessageProps> = ({ received, sent, text }) => {
  return (
    <MessageContainer received={received} sent={sent}>
      <SentTimeBadge />
      <StyledMessage received={received} sent={sent}>
        {text}
      </StyledMessage>
    </MessageContainer>
  );
};
export default Message;
