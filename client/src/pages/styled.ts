import styled from "styled-components";
import { centerItems } from "../common/theme";
import { device } from "../common/device";

type ContentWrapperProps = {
  flex?: string;
};

export const ContentContainer = styled.div`
  width: 85vw;
  height: 85vh;
  background-color: ${(props) => props.theme.color.blackThree};
  border: 1px solid ${(props) => props.theme.color.blackTwo};
  border-radius: ${(props) => props.theme.borderRadius.medium};
  padding: ${(props) => props.theme.padding.small};
  ${(props) => props.theme.shadow.medium};
  ${centerItems.all};

  @media ${device.md} {
    width: 60vw;
  }
`;

export const ContentWrapper = styled.div<ContentWrapperProps>`
  display: flex;
  flex-direction: ${({ flex }) => flex};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: ${(props) => props.theme.borderRadius.small};
  border: 1px solid ${(props) => props.theme.color.green};

  @media ${device.lg} {
    //TBD
  }
`;

export const LoginTitle = styled.h1`
  width: 100%;
  max-width: 320px;
  padding: ${(props) => props.theme.padding.small};
  font-size: ${(props) => props.theme.fontSize.titleSm};
  text-align: center;
  font-weight: 800;
  color: white;
  margin-bottom: ${(props) => props.theme.margin.small};
  border-radius: 40px;
  background-color: ${(props) => props.theme.color.blackTwo};

  @media ${device.lg} {
    max-width: 580px;
  }

  .welcome {
    position: relative;
    z-index: 1;
    &:before {
      position: absolute;
      content: "";
      height: 0.3em;
      width: 80%;
      bottom: 0.1em;
      z-index: -1;
      background: #a283ff;
    }
  }
  .chat {
    position: relative;
    z-index: 1;
    /*  color: #006f00; */
    color: ${(props) => props.theme.color.green};
    &:before {
      position: absolute;
      content: "";
      height: 0.1em;
      width: 100%;
      top: 0.2em;
      z-index: -1;
      background: ${(props) => props.theme.color.pinkDarker};
    }
  }
`;
