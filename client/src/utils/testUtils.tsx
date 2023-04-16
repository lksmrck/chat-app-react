import { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme";
import { AuthContext } from "../context/AuthContext";
import { ConversationContext } from "../context/ConversationContext";
import { MessagesContext } from "../context/MessagesContext";
import { mockUser, mockConversation, mockMessages, mockAllConversations } from "../mocks/data";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { server } from "../mocks/server";

const mockFn = jest.fn();

const ThemeProviderComponent = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const AuthProviderComponent = ({ children }: { children: ReactNode }) => {
  const currentUser = mockUser;

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser: mockFn, isLoading: true }}>
      {children}
    </AuthContext.Provider>
  );
};

const ConversationProviderComponent = ({ children }: { children: ReactNode }) => {
  const currentConversation = mockConversation;
  const allConversations = mockAllConversations;

  return (
    <ConversationContext.Provider
      value={{
        currentConversation,
        setCurrentConversation: mockFn,
        allConversations,
        setAllConversations: mockFn,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};

const MessagesProviderComponent = ({ children }: { children: ReactNode }) => {
  const messages = mockMessages;
  return (
    <MessagesContext.Provider value={{ messages, setMessages: mockFn }}>
      {children}
    </MessagesContext.Provider>
  );
};

const setupTest = (component: ReactElement) => {
  return render(
    <BrowserRouter>
      <AuthProviderComponent>
        <ConversationProviderComponent>
          <MessagesProviderComponent>
            <ThemeProviderComponent>{component}</ThemeProviderComponent>
          </MessagesProviderComponent>
        </ConversationProviderComponent>
      </AuthProviderComponent>
    </BrowserRouter>
  );
};

export default setupTest;

//Chakra UI theme
beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

//Mock server
beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
