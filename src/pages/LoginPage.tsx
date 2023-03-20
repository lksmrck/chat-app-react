import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { StyledLoginPage } from "./styled";
import { Container } from "../components/ui/styled";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <StyledLoginPage>
      Welcome to the CHAT.
      <Button colorScheme="twitter" onClick={() => navigate("/login")}>
        Let's login
      </Button>
    </StyledLoginPage>
  );
};

export default LoginPage;
