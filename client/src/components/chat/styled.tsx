import styled from "styled-components";
import { chatLayout } from "../../common/theme";

export const StyledChat = styled.div`
  flex: 2;
  height: 100%;
`;

export const MessageInputContainer = styled.div`
  background-color: #c4c4c4;
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.small};
  height: ${chatLayout.messageInputHeight};
`;

export const StyledChatTitle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.color.blackOne};
  width: 100%;
  height: ${chatLayout.chatTitleHeight};
  color: white;

  border-top-right-radius: ${(props) => props.theme.borderRadius.small};
`;
