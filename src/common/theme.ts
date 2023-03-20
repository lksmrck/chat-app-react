/* import { DefaultTheme } from "styled-components"; */
import styled from "styled-components";

export interface DefaultTheme {
    color: {
        [key: string]: string
    },
    shadow: {
        [key: string]: string
    },
    fontSize: {
        [key: string]: string
    },
    margin: {
        [key: string]: string
    },
    padding: {
        [key: string]: string
    },
    borderRadius: string,
    centerItems: {
        [key: string]: string
    }
};

type ContainerProps = {
    height?: string;
    width?: string
}

export const theme: DefaultTheme = {
    color: {
        pinkLighter: "#ffd6ff",
        pinkDarker: "#e7c6ff",
        purple: "#c8b6ff",
        blueDarker: "#b8c0ff",
        blueLighter: "#bbd0ff"
    },
    shadow: {
        light: "-webkit-box-shadow: 9px 9px 5px -3px rgba(0,0,0,0.75); -moz-box-shadow: 9px 9px 5px -3px rgba(0,0,0,0.75); box-shadow: 9px 9px 5px -3px rgba(0,0,0,0.75);",
        medium: "-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);",
      /*   heavy: "" */
    },
    fontSize: {
        xs: "0.75rem", /* 12px */
        s: "0.875rem", /* 14px */
        m: "1rem", /* 16px */
        l: "1.125rem", /* 18px */
        xl: "1.25rem", /* 20px */
    },
    margin: {
        small: "0.5em",
        medium: "1em",
        large: "1.5em"
    },
    padding: {
        small: "1em",
        medium: "1.5em",
        large: "2em"
    },
    borderRadius: "8px",
    centerItems: {
        all: "display: flex; justify-content: center; align-items: center",
        horizontal: "display: flex; justify-content: center;",
        vertical: "display: flex; align-items: center",
    },
}


export const Container = styled.div `
    height: ${({height}: ContainerProps ) => height};
    width: ${({width}: ContainerProps ) => width};
    ${(props) => props.theme.center.all};
`

