import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { ConversationContextProvider } from "./context/ConversationContext";
import { MessagesContextProvider } from "./context/MessagesContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <MessagesContextProvider>
          <ConversationContextProvider>
            <ThemeProvider theme={theme}>
              <App />
            </ThemeProvider>
          </ConversationContextProvider>
        </MessagesContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
