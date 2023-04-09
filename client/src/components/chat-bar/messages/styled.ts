import styled from "styled-components";
import { DefaultTheme, chatLayout, centerItems } from "../../../common/theme";

type StyledMessageProps = {
  received?: boolean;
  sent?: boolean;
  theme: DefaultTheme;
};

type MessageContainerProps = {
  received?: boolean;
  sent?: boolean;
};

export const MessageContainer = styled.div<MessageContainerProps>`
  display: flex;
  flex-direction: ${(props) => (props.sent ? "row-reverse" : "row")};
  align-items: center;
  min-width: 300px;
  margin: 0 ${(props) => props.theme.margin.small};
`;

export const StyledMessagesList = styled.div`
  width: 100%;
  /*  padding: 0 ${(props) => props.theme.padding.small}; */
  height: ${chatLayout.messagesListHeight};

  margin-bottom: ${(props) => props.theme.margin.xsmall};
  overflow: hidden;
  white-space: nowrap;

  & * {
    //Hide scrollbar for all children
    -ms-overflow-style: none; //IE + Edge
    scrollbar-width: none; //Firefox
    &::-webkit-scrollbar {
      //Chrome
      display: none;
    }
  }

  .ScrollToBottomInitial {
    display: flex;
    flex-direction: column-reverse;
  }

  .ScrollToBottomStyles {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const StyledMessage = styled.div<StyledMessageProps>`
  min-height: 2.25rem;
  min-width: min-content;
  max-width: 12rem;
  white-space: normal;
  overflow-wrap: break-word;

  margin: ${(props) => props.theme.margin.messageMargin};
  ${(props) => (props.sent ? "margin-right: 0.5em" : "margin-left: 0.5em")};

  border-radius: ${(props) =>
    props.received
      ? props.theme.borderRadius.receivedMessage
      : props.theme.borderRadius.sentMessage};
  padding: ${(props) => props.theme.padding.xsmall};

  background-color: ${(props) =>
    props.received ? props.theme.color.receivedMessageBg : props.theme.color.sentMessageBg};
`;

export const StyledSentMessageBadge = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.theme.margin.small};
`;

export const SentMessageBadgeText = styled.p`
  font-size: ${(props) => props.theme.fontSize.xs};
`;

export const MessagesListErrorMessage = styled.div`
  height: 100%;
  ${centerItems.all};
  color: red;
  font-size: ${(props) => props.theme.fontSize.sm};
  h3 {
    margin: 0 ${(props) => props.theme.margin.small};
  }
`;
