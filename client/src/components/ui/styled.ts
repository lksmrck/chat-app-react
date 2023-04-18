import styled from "styled-components";
import { centerItems } from "../../common/theme";

type ContainerProps = {
  height?: string;
  width?: string;
};
export const Layout = styled.main`
  ${centerItems.all};
  background-color: ${(props) => props.theme.color.background};
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div<ContainerProps>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  ${centerItems.all};
`;

export const SpinnerContainer = styled.div`
  height: 100%;
  width: 100%;
  ${centerItems.all}
`;
