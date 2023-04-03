import Message from "../Message";
import setupTest from "../../../../utils/testUtils";
import { screen } from "@testing-library/react";
import { theme } from "../../../../common/theme";

describe("Message displays correct data", () => {
  const mockDate = new Date();

  beforeEach(() =>
    setupTest(<Message received={true} sent={false} text={"Hello world!"} time={mockDate} />)
  );

  test("Message displays message text", () => {
    const messageText = screen.getByText(/Hello world!/i);
    expect(messageText).toBeInTheDocument();
  });

  test("Received message has correct background-color depending on props", () => {
    const messageContainer = screen.getByTestId("styled-message");
    expect(messageContainer).toHaveStyle(`background-color: ${theme.color.receivedMessageBg}`);
  });
});
