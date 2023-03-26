import styled from "styled-components";
import { chatLayout } from "../../common/theme";

export const StyledChat = styled.div`
  flex: 2;
  height: 100%;
`;

export const StyledChatNavbar = styled.nav`
/*   display: flex;
  align-items: center; */
  background-color: ${(props) => props.theme.color.blackOne};
  width: 100%;
  height: ${chatLayout.chatTitleHeight};
  color: white;

  border-top-right-radius: ${(props) => props.theme.borderRadius.small};
`;

export const Container = styled.nav`
height: 100%;
width: max-content;
display: flex;
align-items: center;
margin-left: ${props => props.theme.margin.small};

&:hover {
  cursor: pointer;
}
`;
export const ChatNavbarName = styled.nav`
margin-left: ${props => props.theme.margin.small};
font-size: ${props => props.theme.fontSize.l};
font-weight: bold;
`;
