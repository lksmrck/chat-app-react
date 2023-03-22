import { FC } from "react";
import googleLogo from "../../assets/googleLogo.png";
import { StyledGoogleLoginButton, StyledGoogleImage } from "./styled";

type GoogleLoginButtonProps = { onClick: any };

const GoogleLoginButton: FC<GoogleLoginButtonProps> = ({ onClick }) => {
  return (
    <StyledGoogleLoginButton onClick={onClick}>
      <StyledGoogleImage src={googleLogo} width="27px"></StyledGoogleImage>
      <p>Sign in with Google</p>
    </StyledGoogleLoginButton>
  );
};

export default GoogleLoginButton;
