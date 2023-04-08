import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GoogleLoginButton from "../GoogleLoginButton";
import setupTest from "../../../utils/testUtils";
import googleLogo from "../../../assets/googleLogo.png";

describe("google login button testing", () => {
  const handleClick = jest.fn();
  beforeEach(() => setupTest(<GoogleLoginButton onClick={handleClick} />));

  test("google button renders correct text", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Sign in with Google");
  });

  test("google button renders correct image", () => {
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", googleLogo);
  });
});
