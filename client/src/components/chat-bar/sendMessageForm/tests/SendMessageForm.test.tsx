import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SendMessageForm from "../SendMessageForm";
import setupTest from "../../../../utils/testUtils";

describe("input testing", () => {
  beforeEach(() => setupTest(<SendMessageForm />));

  test("input changes correctly when user is typing", () => {
    const input = screen.getByRole("textbox");
    userEvent.type(input, "Hello world");
    expect(input).toHaveValue("Hello world");
  });

  test("placeholder text", () => {
    const input = screen.getByPlaceholderText("Type something...");
    expect(input).toBeTruthy();
  });

  //REPAIRME
  test("sent message displays after user clicks send button", async () => {
    const form = screen.getByRole("form");
    const input = screen.getByRole("textbox");
    const sendButton = screen.getByRole("button");
    userEvent.type(input, "Hellotest!");
    /*    userEvent.click(sendButton); */
    fireEvent.submit(form);

    const submittedMessage = await screen.findByText(/Hellotest!/i);
    expect(submittedMessage).toBeInTheDocument();
  });
});
