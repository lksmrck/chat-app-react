import { useState } from "react";
import GoogleButton from "react-google-button";
import LoginPage from "../../pages/LoginPage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/conversations");
  };

  return (
    <div>
      <GoogleButton type="dark" onClick={loginHandler} />
    </div>
  );
};

export default Login;
