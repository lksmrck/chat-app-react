import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../Search";
import setupTest from "../../../../utils/testUtils";

describe("search input renders properly with correct data", () => {
  const handleSearchTerm = jest.fn();
  beforeEach(() => setupTest(<Search handleChangeConversationSearchTerm={handleSearchTerm} />));

  test("input is rendered properly", () => {
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  test("input has correct value when user type", () => {
    const input = screen.getByRole("textbox");
    userEvent.type(input, "JohnWick");
    expect(input).toHaveValue("JohnWick");
  });

  test("handle search term is called once for every letter that user type", () => {
    const input = screen.getByRole("textbox");
    userEvent.type(input, "JohnWick");
    expect(handleSearchTerm).toBeCalledTimes(8);
  });
});
