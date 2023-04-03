import { render, screen } from "@testing-library/react";
import Chat from "./Chat";
import setupTest from "../../utils/testUtils";

//TBD

const handleClickBackToConversations = jest.fn();

describe("TBD", () => {
  beforeEach(() =>
    setupTest(<Chat handleClickBackToConversations={handleClickBackToConversations} />)
  );

  test("chat bar displays users name", () => {
    const linkElement = screen.getByText(/Test User/i);
    expect(linkElement).toBeInTheDocument();
  });
  //TEST PŘESUNUT DO CHATNAVBAR.TEST.TSX
});
