import styled from "styled-components";
import { chatLayout } from "../../common/theme";
import { device } from "../../common/device";

type ChatProps = {
  showChat?: boolean;
};

export const StyledChat = styled.div<ChatProps>`
  width: 100%;
  height: 100%;
  display: block;

  @media ${device.md} {
    width: 0%;
    /*  display: none; */
    //Animation
    ${({ showChat }) =>
      showChat &&
      `
    display: block;
    width: 66.6%;
    transition: width 1s;
`}/*    ${({ showChat }) => (showChat ? "display: block" : "display: none")}; */
  }
`;

export const StyledChatNavbar = styled.nav`
  background-color: ${(props) => props.theme.color.blackOne};
  width: 100%;
  height: ${chatLayout.chatTitleHeight};
  color: white;

  border-top-right-radius: ${(props) => props.theme.borderRadius.small};
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};

  overflow: hidden; //TEST
  white-space: nowrap; //TEST

  /*   .navbar-data {
    //TEST class
      overflow: hidden;
     white-space: nowrap;
  } */

  @media ${device.md} {
    border-top-left-radius: 0;
  }
`;

export const Container = styled.nav`
  height: 100%;
  width: calc(100% - 2 * ${(props) => props.theme.margin.small});
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${(props) => props.theme.margin.small};

  div {
    display: flex;
  }

  &:hover {
    cursor: pointer;
  }
`;
export const ChatNavbarName = styled.nav`
  margin-left: ${(props) => props.theme.margin.small};
  font-size: ${(props) => props.theme.fontSize.l};
  font-weight: bold;
`;
