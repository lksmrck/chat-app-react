import { ContentWrapper, ContentContainer, LoginTitle } from "./styled";
import Login from "../components/login/Login";
import useUserAuth from "../hooks/useUserAuth";
import Spinner from "../components/ui/Spinner";

const LoginPage = () => {
  const { isLoading } = useUserAuth();
  return (
    <ContentContainer>
      <ContentWrapper flex="column">
        {isLoading ? (
          <Spinner size={"xl"} />
        ) : (
          <>
            <LoginTitle>
              <span className="welcome">Welcome</span> to the
              <span className="chat"> chitCHAT.</span>
            </LoginTitle>
            <Login />
          </>
        )}
      </ContentWrapper>
    </ContentContainer>
  );
};

export default LoginPage;
