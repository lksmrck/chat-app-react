import styled from "styled-components";
import { chatLayout } from "../../common/theme";

export const StyledChat = styled.div`
  flex: 2;

  height: 100%;
  overflow-y: scroll;

  //Hide scrollbar
  -ms-overflow-style: none; //IE + Edge
  scrollbar-width: none; //Firefox
  &::-webkit-scrollbar {
    //Chrome
    display: none;
  }
`;

export const MessageInputContainer = styled.div`
  background-color: #c4c4c4;
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.xsmall};
  height: ${chatLayout.messageInputHeight};
`;

export const StyledChatTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  height: ${chatLayout.chatTitleHeight};

  border-top-right-radius: ${(props) => props.theme.borderRadius.xsmall};
`;
