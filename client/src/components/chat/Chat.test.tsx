import { render, screen } from "@testing-library/react";
import Chat from "./Chat";
import setupTest from "../../utils/testUtils";

//TBD

describe("", () => {
  beforeEach(() => setupTest(<Chat />));

  test("testing test", () => {
    const linkElement = screen.getByText(/Sent mess/i);
    expect(linkElement).toBeInTheDocument();
  });
});
