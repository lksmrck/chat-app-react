import { render, screen } from "@testing-library/react";
import Chat from "./ChatBar";
import setupTest from "../../utils/testUtils";

//TBD

const handleClickBackToConversations = jest.fn();

describe("TBD", () => {
  beforeEach(() =>
    setupTest(<Chat handleClickBackToConversations={handleClickBackToConversations} />)
  );

  test("testing test", () => {
    const linkElement = screen.getByText(/Sent mess/i);
    expect(linkElement).toBeInTheDocument();
  });
});
