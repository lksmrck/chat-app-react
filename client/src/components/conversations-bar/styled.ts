import { theme } from "@chakra-ui/react";
import styled from "styled-components";
import { chatLayout } from "../../common/theme";

type ConversationsBarProps = {
  widthAnimation?: boolean;
};

export const StyledConversationsBar = styled.div<ConversationsBarProps>`
  height: 100%;
  width: 100%;

  border-right: 1px solid ${(props) => props.theme.color.green};
  background-color: ${(props) => props.theme.color.blackOne};
  border-top-left-radius: ${(props) => props.theme.borderRadius.small};
  border-top-right-radius: ${(props) => props.theme.borderRadius.small};
  border-bottom-left-radius: ${(props) => props.theme.borderRadius.small};
  border-right: 1px solid #0c0c0c;
  overflow: hidden;

  //Animation
  ${({ widthAnimation }) =>
    widthAnimation &&
    `
    border-top-right-radius: 0;
    width: 33.3%;
    transition: width 1s;
`}
`;

export const StyledSearch = styled.div`
  color: white;
`;
