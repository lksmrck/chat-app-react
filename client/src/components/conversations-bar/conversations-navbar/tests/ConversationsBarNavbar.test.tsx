import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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

  //REPAIRME
  //   test("logout button sends user to login screen", async () => {
  //     const logoutButton = screen.getByLabelText("logout");
  //     userEvent.click(logoutButton);

  //     /*   const googleLoginButton = await screen.findByAltText("google-logo"); */
  //     /* const googleLoginButton = await screen.findByTestId("test-google"); */
  //     const googleLoginButton = await screen.findByRole("img", { name: /google\-logo/i });
  //     expect(googleLoginButton).toBeInTheDocument();
  //   });
});
