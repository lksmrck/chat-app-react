import { FC } from "react";
import SentMessageBadge from "./SentMessageBadge";
import { StyledMessage, MessageContainer } from "./styled";

type MessageProps = {
  received?: boolean;
  sent?: boolean;
  text: string;
  time: Date;
};

const Message: FC<MessageProps> = ({ received, sent, text, time }) => {
  return (
    <MessageContainer received={received} sent={sent}>
      <SentMessageBadge received={received} sent={sent} time={time} />
      <StyledMessage received={received} sent={sent}>
        {text}
      </StyledMessage>
    </MessageContainer>
  );
};
export default Message;
