import styled from "styled-components";

type ContainerProps = {
    height?: string;
    width?: string
}

export const Container = styled.div `
height: ${({height}: ContainerProps ) => height};
width: ${({width}: ContainerProps ) => width};
${(props) => props.theme.center.all};


`