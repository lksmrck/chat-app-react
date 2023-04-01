import styled from "styled-components";

export const StyledLogin = styled.div`
  width: 100%;
`;

export const StyledGoogleLoginButton = styled.button`
  margin: 0 auto;

  width: 100%;
  max-width: 300px;
  height: 40px;
  padding-left: 1em;
  padding-right: 2.5em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  font-weight: bold;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  border: 1px solid grey;

  &:hover {
    transform: scale(1.01);
    cursor: pointer;
  }
`;

export const StyledGoogleImage = styled.img`
  /*  margin-left: ${(props) => props.theme.margin.medium}; */
`;
