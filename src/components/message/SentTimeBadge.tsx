import defaultPic from "../../assets/Default_pfp.png";
import { StyledSendTimeBadge, SendTimeBadgeText } from "./styled";

const SentTimeBadge = () => {
  return (
    <StyledSendTimeBadge>
      <img width="16px" src={defaultPic} />
      <SendTimeBadgeText>just now</SendTimeBadgeText>
    </StyledSendTimeBadge>
  );
};

export default SentTimeBadge;
