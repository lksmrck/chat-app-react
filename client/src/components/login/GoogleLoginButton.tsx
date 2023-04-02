import { FC } from "react";
import googleLogo from "../../assets/googleLogo.png";
import { StyledGoogleLoginButton } from "./styled";

type GoogleLoginButtonProps = { onClick: any };

const GoogleLoginButton: FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <StyledGoogleLoginButton onClick={onClick}>
      <img alt="google-logo" src={googleLogo} width="27px"></img>
      <h1>Sign in with Google</h1>
    </StyledGoogleLoginButton>
  );
};

export default GoogleLoginButton;
