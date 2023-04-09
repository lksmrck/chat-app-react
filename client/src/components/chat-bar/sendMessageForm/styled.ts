import styled from "styled-components";
import { chatLayout, centerItems } from "../../../common/theme";

export const StyledForm = styled.form`
  /*  background-color: #c4c4c4; */

  color: white;
  //DAT PRYC
  /* border-bottom-right-radius: ${(props) => props.theme.borderRadius.small}; */
  height: ${chatLayout.messageInputHeight};
  ${centerItems.all};

  padding: 0 ${(props) => props.theme.padding.small};

  button {
    margin-left: ${(props) => props.theme.margin.medium};
    /* margin-bottom: ${(props) => props.theme.margin.xsmall}; */
  }
`;
