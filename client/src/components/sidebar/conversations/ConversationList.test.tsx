import { screen } from "@testing-library/react";
import ConversationList from "./ConversationList";
import { AuthContext } from "../../../context/AuthContext";
import { mockUser } from "../../../mocks/data";
import setupTest from "../../../utils/testUtils";

describe("Conversation list is fetched and rendered properly", () => {
  const currentUser = mockUser;
  const setCurrentUser = jest.fn();
  beforeEach(() =>
    setupTest(
      <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
        <ConversationList />
      </AuthContext.Provider>
    )
  );

  test("displays profile picture for each conversation from the server", async () => {
    const profilePic = await screen.findAllByRole("img", { name: /profile-pic/i });
    expect(profilePic).toHaveLength(2);
  });
});
