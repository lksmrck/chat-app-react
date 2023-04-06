import setupTest from "../../../../utils/testUtils";
import { screen } from "@testing-library/react";
import { theme } from "../../../../common/theme";
import SentMessageBadge from "../SentMessageBadge";
import { mockUser } from "../../../../mocks/data";

describe("sent message badge image is rendered properly", () => {
  beforeEach(() =>
    setupTest(
      <SentMessageBadge
        time="
  Thu Apr 06 2023 15:52:44 GMT+0200 (středoevropský letní čas)"
        sent={true}
      />
    )
  );

  test("correct data is rendered", async () => {
    const image = screen.getByAltText("profile-pic");
    expect(image).toBeInTheDocument();
  });

  test("Sent message badge when sent={true} displays img of the mockUser", () => {
    const image = screen.getByAltText("profile-pic");
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty("src", mockUser.photoURL);
  });

  test("correct time is rendered within sent message badge", async () => {
    const date = await screen.findByText("15:52");
    expect(date).toBeInTheDocument();
  });
});
