import { StyledChatTitle } from "./styled";
import defaultPic from "../../assets/Default_pfp.png";

const ChatTitle = () => {
  return (
    <StyledChatTitle>
      <img width="30px" src={defaultPic} />
      <h1>Pavel Novak</h1>
    </StyledChatTitle>
  );
};

export default ChatTitle;
