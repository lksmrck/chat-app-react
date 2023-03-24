import { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../common/theme";

const ThemeProviderComponent = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export const setupTest = (component: ReactElement) => {
  return render(<ThemeProviderComponent>{component}</ThemeProviderComponent>);
};

export default setupTest;
