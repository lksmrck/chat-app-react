import { Spinner as ChakraSpinner } from "@chakra-ui/react";
import { SpinnerContainer } from "./styled";
import { theme } from "../../common/theme";
import { FC } from "react";

type SpinnerProps = {
  size: string;
};

const Spinner: FC<SpinnerProps> = ({ size }) => {
  return (
    <SpinnerContainer>
      <ChakraSpinner color={theme.color.green} size={size} />
    </SpinnerContainer>
  );
};

export default Spinner;
