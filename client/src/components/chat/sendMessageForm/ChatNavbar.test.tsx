import { render, screen } from "@testing-library/react";
import ChatNavbar from "../ChatNavbar";
import setupTest from "../../../utils/testUtils";

//TBD

const handleClickBackToConversations = jest.fn();

describe("TBD", () => {
  beforeEach(() =>
    setupTest(<ChatNavbar handleClickBackToConversations={handleClickBackToConversations} />)
  );

  test("chat bar displays users name", () => {
    const linkElement = screen.getByText(/Karel Novak/i);
    expect(linkElement).toBeInTheDocument();
  });
});
