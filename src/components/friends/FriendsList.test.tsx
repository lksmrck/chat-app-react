import React from "react";
import { render, screen } from "@testing-library/react";
import FriendsList from "./FriendsList";

// TBD

test("renders learn react link", () => {
  render(<FriendsList />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
