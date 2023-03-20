import styled from "styled-components";
import { DefaultTheme } from '../../common/theme';


type StyledMessageProps = {
    received?: boolean,
    sent?: boolean,
    theme: DefaultTheme,
}


export const StyledMessage = styled.div<StyledMessageProps>`


min-height: 2.25rem;
max-width: 12rem;

margin: ${props => props.theme.margin.messageMargin};

border-radius: ${props =>  props.received ? props.theme.borderRadius.receivedMessage : props.theme.borderRadius.sentMessage};
padding: ${props => props.theme.padding.xsmall};
justify-self:${props =>  props.received ? "start" : "end"};
background-color: ${props =>  props.received ? props.theme.color.receivedMessageBg : props.theme.color.sentMessageBg};


`

export const StyledSendTimeBadge = styled.div`
display: flex;
`

export const SendTimeBadgeText = styled.p`
font-size: ${props => props.theme.fontSize.xs}`

/* props.received ? props.theme.color.sentMessageBg : */