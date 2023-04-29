import { screen } from "@testing-library/react";
import ConversationList from "../ConversationList";

import setupTest from "../../../../utils/testUtils";

describe("Conversation list is fetched and rendered properly", () => {
  beforeEach(() => setupTest(<ConversationList conversationSearchTerm={""} />));

  test("displays profile picture for each conversation from the server", async () => {
    const profilePic = await screen.findAllByRole("img");
    expect(profilePic).toHaveLength(2);
  });
});
