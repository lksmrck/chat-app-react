import styled from "styled-components";

type ContentWrapperProps = {
    flex?: string
}

export const ContentContainer = styled.div `
background-color: ${props => props.theme.color.blackLighter};
width: 60vw;
height: 80vh;
border: 1px solid ${props => props.theme.color.blackDarker};
border-radius: ${props => props.theme.borderRadius.medium};
padding: ${props => props.theme.padding.small};
${props => props.theme.shadow.medium}; 
${props => props.theme.centerItems.all};

`

export const ContentWrapper = styled.div<ContentWrapperProps>`
display: flex;
flex-direction: ${({flex} ) => flex};
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
border-radius: ${props => props.theme.borderRadius.small};
border: 1px solid ${props => props.theme.color.green};
`

export const LoginTitle = styled.h1`
/* display: inline-block; */
padding: ${props => props.theme.padding.small}; 
font-size: ${props => props.theme.fontSize.title};
font-weight: 800;
color: white;
margin-bottom: ${props => props.theme.margin.small};
border-radius: 40px;
background-color: ${props => props.theme.color.blackDarker};

.welcome {
    position: relative; 
    z-index: 1;
    &:before { 
        position: absolute;
        content: '';
        height: .2em;
        width: 80%;
        bottom: .1em;
        z-index: -1;
        background: ${props => props.theme.color.purple}
    }};
.chat {
    position: relative; 
    z-index: 1;
    color: green;
    &:before { 
        position: absolute;
        content: '';
        height: .2em;
        width: 100%;
        top: .2em;
        z-index: -1;
        background: ${props => props.theme.color.purple}
    }
};


`