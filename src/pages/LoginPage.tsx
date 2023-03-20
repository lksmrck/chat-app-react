import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
/* import { StyledLoginPage } from "./styled"; */
import { ContentWrapper, ContentContainer, LoginTitle } from "./styled";
import Login from "../components/login/Login";

const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <ContentContainer>
      <ContentWrapper flex="column">
        <LoginTitle>
          <span className="welcome">Welcome</span> to the
          <span className="chat"> CHAT.</span>
        </LoginTitle>
        <Login />
        {/*   <Button colorScheme="twitter" onClick={() => navigate("/login")}>
          Let's login
        </Button> */}
      </ContentWrapper>
    </ContentContainer>
  );
};

export default LoginPage;
