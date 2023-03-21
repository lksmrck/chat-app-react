import { useNavigate } from "react-router-dom";
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
      </ContentWrapper>
    </ContentContainer>
  );
};

export default LoginPage;
