import styled from "styled-components";
import { chatLayout } from "../../../common/theme";

export const StyledForm = styled.form`
  /*  background-color: #c4c4c4; */
  color: white;
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.small};
  height: ${chatLayout.messageInputHeight};

  button {
    margin-left: ${(props) => props.theme.margin.medium};
    margin-bottom: ${(props) => props.theme.margin.xxsmall};
  }
`;
