import styled from "styled-components";
import { chatLayout, centerItems } from "../../../common/theme";
import { device_min } from "../../../common/device";

export const StyledForm = styled.form`
  /*  background-color: #c4c4c4; */

  color: white;

  height: ${chatLayout.messageInputHeight};
  ${centerItems.all};

  padding: 0 ${(props) => props.theme.padding.small};

  .container {
    ${centerItems.all};
    justify-content: space-between;

    @media ${device_min.md} {
      justify-content: initial;
      gap: 6.3%;
    }
  }
`;
