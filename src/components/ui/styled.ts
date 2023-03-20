import styled from "styled-components";

type ContainerProps = {
    height?: string;
    width?: string
}
export const Layout = styled.main`
${props => props.theme.centerItems.all};
background-color: ${props => props.theme.color.blueLighter};
width: 100vw;
height: 100vh;
`;

export const Container = styled.div<ContainerProps> `
    height: ${({height}) => height};
    width: ${({width} ) => width};
    ${(props) => props.theme.centerItems.all};
`

