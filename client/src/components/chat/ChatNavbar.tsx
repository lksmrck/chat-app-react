import { StyledChatNavbar } from "./styled";
import defaultPic from "../../assets/Default_pfp.png";

const ChatNavbar = () => {
  return (
    <StyledChatNavbar>
      <img width="30px" src={defaultPic} />
      <h1>Pavel Novak</h1>
    </StyledChatNavbar>
  );
};

export default ChatNavbar;
