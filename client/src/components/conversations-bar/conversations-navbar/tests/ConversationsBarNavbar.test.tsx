import { screen } from "@testing-library/react";
import ConversationsBarNavbar from "../ConversationsBarNavbar";
import setupTest from "../../../../utils/testUtils";
import userEvent from "@testing-library/user-event";

describe("buttons in navbar works properly", () => {
  beforeEach(() => setupTest(<ConversationsBarNavbar />));

  test("modal window displays after click on modal open icon", async () => {
    const openModalButton = screen.getByLabelText("add-conversation");
    userEvent.click(openModalButton);
    const searchInput = await screen.findByTestId("conv-search-input");
    expect(searchInput).toBeInTheDocument();
  });

  test("logout button is rendered properly", () => {
    const logoutButton = screen.getByLabelText("logout");

    expect(logoutButton).toBeInTheDocument();
  });
});
