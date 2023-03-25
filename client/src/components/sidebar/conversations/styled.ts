import styled from "styled-components"
import { sidebarLayout } from "../../../common/theme"


export const StyledConversationList = styled.ul`
height: ${sidebarLayout.friendsListHeight};
overflow-y: scroll;

//Hide scrollbar
-ms-overflow-style: none; //IE + Edge
  scrollbar-width: none; //Firefox
  &::-webkit-scrollbar {
    //Chrome
    display: none;
  }

`

export const StyledConversation = styled.li`
display: flex;
color: white;
border-bottom: 1px solid grey;
padding: ${props => props.theme.padding.xsmall};

`

export const Container = styled.div`
margin-left: ${props => props.theme.margin.small};
margin-top: ${props => props.theme.margin.small};

`


export const StyledFriendName = styled.h1`
font-weight: bold;
`
export const StyledPreviewMessage = styled.h3`
color: grey;
font-size: ${props => props.theme.fontSize.s};
`