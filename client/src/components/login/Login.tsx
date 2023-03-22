import { useState } from "react";

import LoginPage from "../../pages/LoginPage";
import { useNavigate } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";
import { StyledLogin } from "./styled";
import useUserAuth from "../../hooks/useUserAuth";

const Login = () => {
  const navigate = useNavigate();

  const { googleSignIn } = useUserAuth();

  const loginHandler = () => {
    navigate("/conversations");
  };

  return (
    <StyledLogin>
      <GoogleLoginButton onClick={googleSignIn} />
    </StyledLogin>
  );
};

export default Login;
