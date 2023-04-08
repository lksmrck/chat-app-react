import MessagesList from "../MessagesList";
import setupTest from "../../../../utils/testUtils";
import { screen } from "@testing-library/react";
import { theme } from "../../../../common/theme";

describe("MessagesList renders correct elements", () => {
  beforeEach(() => setupTest(<MessagesList />));

  test("displays correct number of messages fetched from the server", async () => {
    const messages = await screen.findAllByTestId("styled-message");
    expect(messages).toHaveLength(5);
  });
});
