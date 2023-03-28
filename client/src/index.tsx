import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";
import { ConversationContextProvider } from "./context/ConversationContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <ConversationContextProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ConversationContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
