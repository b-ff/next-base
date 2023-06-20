import {
  SessionContext,
  SessionContextValue,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import { Auth } from "./Auth";
import { render } from "@testing-library/react";

const mockUser = {
  email: "kermit@muppets.com",
  name: "Kermit The Frog",
  image:
    "https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg",
};

const mockSession = {
  update: () => Promise.resolve({}),
  data: { user: mockUser, expires: "" },
  status: "authenticated",
};

describe("Component Auth", () => {
  it("Should render as expected", () => {
    const { container } = render(<Auth />);
    expect(container).toMatchSnapshot();
  });

  it("Should call useSession hook from next-auth/react module", () => {
    const dom = render(<Auth />);
    expect(useSession).toBeCalled();
  });

  it("Should show sign-in link if user is not signed in", () => {
    const dom = render(<Auth />);
    expect(dom.getByText("Sign In / Sign Up")).not.toBeNull();
  });

  it("Should call signIn function from next-auth/react by clicking sign-in link", () => {
    const dom = render(<Auth />);
    dom.getByText("Sign In / Sign Up").click();
    expect(signIn).toBeCalled();
  });

  it("Should show sign-out link if user is signed in", () => {
    const dom = render(
      <SessionContext.Provider value={mockSession as SessionContextValue}>
        <Auth />
      </SessionContext.Provider>
    );

    expect(dom.getByText("Sign Out")).not.toBeNull();
  });

  it("Should call signOut function from next-auth/react by clicking sign-out link", () => {
    const dom = render(
      <SessionContext.Provider value={mockSession as SessionContextValue}>
        <Auth />
      </SessionContext.Provider>
    );

    dom.getByText("Sign Out").click();
    expect(signOut).toBeCalled();
  });
});
