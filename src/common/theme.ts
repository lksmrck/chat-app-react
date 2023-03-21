/* import { DefaultTheme } from "styled-components"; */

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
    borderRadius: {
        [key: string]: string
    },
   
};



export const theme: DefaultTheme = {
    color: {
        pinkLighter: "#ffd6ff",
        pinkDarker: "#e7c6ff",
        purple: "#c8b6ff",
        blueDarker: "#b8c0ff",
        blueLighter: "#bbd0ff",

        //Secondary
        blackDarker: "#1c1c1c",
        blackLighter: "#363636",
        green: "#71AE21", //Použije se?

        //Messages
        sentMessageBg: "#ffd6ff",
        receivedMessageBg: "#bbd0ff"
    },
    shadow: {
        /* light: "", */
        medium: "-webkit-box-shadow: 9px 9px 5px -3px rgba(0,0,0,0.75); -moz-box-shadow: 9px 9px 5px -3px rgba(0,0,0,0.75); box-shadow: 9px 9px 5px -3px rgba(0,0,0,0.75);",
        heavy: "-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);",
     
    },
    fontSize: {
        xs: "0.75rem", /* 12px */
        s: "0.875rem", /* 14px */
        m: "1rem",  /* 16px */
        l: "1.125rem", /* 18px */
        xl: "1.25rem", /* 20px */
        title: "2.5rem" /*  40px */
    },
    margin: {
        xsmall: "0.25em",
        small: "0.5em",
        medium: "1em",
        large: "1.5em",
        messageMargin: "0.25em 0.25em 0 0.25em"
    },
    padding: {
        xsmall: "0.5em",
        small: "1em",
        medium: "1.5em",
        large: "2em"
    },
    borderRadius: {
        xsmall: "6px",
        small: "8px",
        medium: "10px",
        large: "14px", /* Použije se? */
        receivedMessage: "0 10px 10px 10px",
        sentMessage: "10px 0 10px 10px"
    },
    
}


export const chatLayout = {
    chatTitleHeight: "50px",
    messageInputHeight: "40px",
    messagesListHeight: "calc(100% - 90px)"
}

export const centerItems = {
    all: "display: flex; justify-content: center; align-items: center",
    horizontal: "display: flex; justify-content: center;",
    vertical: "display: flex; align-items: center",
}





