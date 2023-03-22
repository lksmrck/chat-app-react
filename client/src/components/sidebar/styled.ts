import { theme } from "@chakra-ui/react"
import styled from "styled-components"
import { chatLayout } from "../../common/theme"


export const StyledSidebar = styled.div`
height: 100%;
flex: 1;
border-right: 1px solid ${props => props.theme.color.green};
background-color: ${props => props.theme.color.blackOne};
border-top-left-radius: ${props => props.theme.borderRadius.small};
border-bottom-left-radius: ${props => props.theme.borderRadius.small};
border-right: 1px solid #0c0c0c;

`

export const StyledSidebarTitle = styled.div`
height: ${chatLayout.chatTitleHeight};
background-color: #141414;
color: white;
border-top-left-radius: ${props => props.theme.borderRadius.small};
`

export const StyledSearch = styled.div`
color: white
`