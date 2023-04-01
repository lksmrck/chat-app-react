import { theme } from "@chakra-ui/react";
import styled from "styled-components";
import { chatLayout } from "../../common/theme";

export const StyledConversationsBar = styled.div`
  height: 100%;
  flex: 1;
  border-right: 1px solid ${(props) => props.theme.color.green};
  background-color: ${(props) => props.theme.color.blackOne};
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.small};
  border-right: 1px solid #0c0c0c;
  overflow: hidden;
`;

export const StyledConversationsBarNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${(props) => props.theme.padding.small};
  height: ${chatLayout.chatTitleHeight};
  background-color: #141414;
  color: white;
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};

  h1 {
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
  }
`;

export const Container = styled.div`
  display: flex;

  & > button {
    margin-left: ${(props) => props.theme.margin.small};
  }
`;

export const StyledSearch = styled.div`
  color: white;
`;
