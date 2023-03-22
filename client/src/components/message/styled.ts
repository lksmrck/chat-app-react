import styled from "styled-components";
import { DefaultTheme, chatLayout } from '../../common/theme';


type StyledMessageProps = {
    received?: boolean,
    sent?: boolean,
    theme: DefaultTheme,
}

type MessageContainerProps = {
    received?: boolean,
    sent?: boolean
}

export const MessageContainer =styled.div<MessageContainerProps>`
display: flex;
flex-direction: ${props => props.sent? "row-reverse" : "row"};
align-items: center;


`;

export const StyledMessagesList = styled.div`
  padding: ${(props) => props.theme.padding.small};
  height: ${chatLayout.messagesListHeight};
  overflow-y: scroll;

   //Hide scrollbar
   -ms-overflow-style: none; //IE + Edge
  scrollbar-width: none; //Firefox
  &::-webkit-scrollbar {
    //Chrome
    display: none;
  }
`;

export const StyledMessage = styled.div<StyledMessageProps>`

min-height: 2.25rem;
max-width: 12rem;

margin: ${props => props.theme.margin.messageMargin};
${props => props.sent? "margin-right: 0.5em" : "margin-left: 0.5em"};

border-radius: ${props =>  props.received ? props.theme.borderRadius.receivedMessage : props.theme.borderRadius.sentMessage};
padding: ${props => props.theme.padding.xsmall};

background-color: ${props =>  props.received ? props.theme.color.receivedMessageBg : props.theme.color.sentMessageBg};


`

export const StyledSendTimeBadge = styled.div`
color: white;
display: flex;
flex-direction: column;
align-items: center;
`

export const SendTimeBadgeText = styled.p`
font-size: ${props => props.theme.fontSize.xs}`



