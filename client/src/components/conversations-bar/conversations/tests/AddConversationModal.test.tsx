import React from "react";
import { screen, render, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddConversationModal from "../AddConversationModal";
import setupTest from "../../../../utils/testUtils";

describe("modal testing", () => {
  const handleClose = jest.fn();
  beforeEach(() => setupTest(<AddConversationModal isOpen={true} onClose={handleClose} />));

  test("input is rendered properly", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  test("input changes correctly when user typing", () => {
    const input = screen.getByRole("textbox");
    userEvent.type(input, "JohnWick");
    expect(input).toHaveValue("JohnWick");
  });

  test("modal close function is called after click on cancel button", () => {
    const cancelButton = screen.getByText(/cancel/i);
    userEvent.click(cancelButton);
    expect(handleClose).toHaveBeenCalled();
  });

  /*  test("No such user found is rendered after typing wrong email", () => {
    const input = screen.getByRole("textbox");
    const noUserFoundText = screen.getByText(/no such user found\./i);
    userEvent.type(input, "rhwhsdfweqqhqehqehqewrh");
    expect(noUserFoundText).toBeInTheDocument();
  }); */
});
