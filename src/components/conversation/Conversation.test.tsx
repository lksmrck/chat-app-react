import { render, screen } from "@testing-library/react";
import Conversation from "./Conversation";

//TBD
test("renders learn react link", () => {
  render(<Conversation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
