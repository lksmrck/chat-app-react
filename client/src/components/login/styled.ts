import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100%;
`;

export const StyledGoogleLoginButton = styled.button`
  margin: 0 auto;

  width: 100%;
  max-width: 270px;
  height: 40px;

  display: flex;
  align-items: center;
  background-color: white;
  font-weight: bold;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid grey;

  img {
    margin: 0 ${(props) => props.theme.padding.small};
  }

  h1 {
    width: 100%;
    margin-right: ${(props) => props.theme.padding.small};
  }

  &:hover {
    transform: scale(1.01);
    background-color: #eee;
    cursor: pointer;
  }
`;
