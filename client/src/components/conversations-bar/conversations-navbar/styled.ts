import styled from "styled-components";
import { chatLayout } from "../../../common/theme";

export const StyledConversationsBarNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.padding.small};
  height: ${chatLayout.chatTitleHeight};
  background-color: #141414;
  color: white;
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};

  /*  h1 {
    position: relative;
    z-index: 1;
    color: #006f00;
    font-weight: bold;
    &:before {
      position: absolute;
      content: "";
      height: 0.5em;
      width: 100%;
      top: 0.2em;
      z-index: -1;
      background: grey;
    }
  } */
`;

export const ButtonsContainer = styled.div`
  display: flex;

  & > button {
    margin-left: ${(props) => props.theme.margin.small};
  }
`;

export const NavbarContent = styled.div`
  h6 {
    font-size: ${(props) => props.theme.fontSize.xxs};
  }
  h1 {
    font-weight: bold;
    margin-left: ${(props) => props.theme.margin.small};
  }
`;

export const ContentContainer = styled.div`
  display: flex;
`;
