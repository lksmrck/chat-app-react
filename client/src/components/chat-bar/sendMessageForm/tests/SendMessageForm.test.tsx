import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SendMessageForm from "../SendMessageForm";
import setupTest from "../../../../utils/testUtils";

describe("input testing", () => {
  beforeEach(() => setupTest(<SendMessageForm showChat={true} />));

  test("input changes correctly when user is typing", () => {
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello world");
    expect(input).toHaveValue("Hello world");
  });

  test("input renders correct placeholder text", () => {
    const input = screen.getByPlaceholderText("Type something...");
    expect(input).toBeTruthy();
  });
});
