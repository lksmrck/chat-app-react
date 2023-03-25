import styled from "styled-components";
import { chatLayout } from "../../../common/theme";

export const StyledForm = styled.form`
  background-color: #c4c4c4;
  border-bottom-right-radius: ${(props) => props.theme.borderRadius.small};
  height: ${chatLayout.messageInputHeight};
`;