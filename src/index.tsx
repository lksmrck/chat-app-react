import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <BrowserRouter>
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </ChakraProvider>
);
