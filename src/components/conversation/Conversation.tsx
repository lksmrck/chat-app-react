import Message from "../message/Message";
import { StyledConversation } from "./styled";

const Conversation = () => {
  return (
    <StyledConversation>
      <Message text="Sent mess" sent />
      <Message text="Čus" received />
      <Message text="Čus" received />
    </StyledConversation>
  );
};

export default Conversation;
