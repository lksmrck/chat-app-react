import MessagesList from "./MessagesList";
import setupTest from "../../../utils/testUtils";
import { screen } from "@testing-library/react";
import { theme } from "../../../common/theme";

describe("MessagesList renders correct elements", () => {
  beforeEach(() => setupTest(<MessagesList />));

  /*   test("Message displays message text", () => {
    const messageText = screen.getByText(/Hello world!/i);
    expect(messageText).toBeInTheDocument();
  });
 */

  test("displays correct number of messages fetched from the server", async () => {
    const messages = await screen.findAllByTestId("styled-message");
    expect(messages).toHaveLength(5);
  });
});
