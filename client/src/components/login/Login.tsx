import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import { StyledLogin } from "./styled";
import useUserAuth from "../../hooks/useUserAuth";

const Login = () => {
  const navigate = useNavigate();

  const { googleSignIn } = useUserAuth();

  const loginHandler = () => {
    googleSignIn();
  };

  return (
    <StyledLogin>
      <GoogleLoginButton onClick={loginHandler} />
    </StyledLogin>
  );
};

export default Login;
