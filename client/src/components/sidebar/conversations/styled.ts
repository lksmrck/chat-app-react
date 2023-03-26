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

&:hover {
  cursor: pointer;
  background-color: #363636 ;
}

`

export const Container = styled.div`
margin-left: ${props => props.theme.margin.small};
align-self: center;

`


export const StyledFriendName = styled.h1`
font-weight: bold;
`
export const StyledPreviewMessage = styled.h3`
color: grey;
font-size: ${props => props.theme.fontSize.s};
`

export const StyledAddConversationModal = styled.div``


export const StyledFoundUsersList = styled.div`
height: min-content;
max-height: 10rem;
border-bottom-right-radius: ${props => props.theme.borderRadius.small};
border-bottom-left-radius: ${props => props.theme.borderRadius.small};
border: 1px solid #a2a2a2;
padding-bottom: ${props => props.theme.padding.xsmall};
padding-top: ${props => props.theme.padding.xsmall};



`

export const StyledFoundUser = styled.div`
display:flex;
align-items: center;
height: 2rem;
padding-left: ${props => props.theme.padding.xsmall};
margin-bottom: ${props => props.theme.margin.xsmall};


&:hover {
  background-color: #b3b3b3;
  cursor:pointer;
}
/* &:last-child{
  padding-bottom: ${props => props.theme.padding.small};
} */
`

export const UserInfoContainer = styled.div`
display: flex;
margin-left: ${props => props.theme.margin.small};
`

export const StyledUserName = styled.h3`
font-size: ${props => props.theme.fontSize.s};
font-weight: bold;
line-height: 0.8rem;

`

export const StyledUserEmail = styled.h3`
font-size: ${props => props.theme.fontSize.xs};
margin-left: ${props => props.theme.margin.small};
line-height: 0.8rem;

`
