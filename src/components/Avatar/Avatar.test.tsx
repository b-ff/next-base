import { Avatar } from "./Avatar";
import { render } from "@testing-library/react";

const mockName = "John Doe";
const mockInitials = "JD";
const mockSrc =
  "https://lumiere-a.akamaihd.net/v1/images/character_themuppets_kermit_b77a431b.jpeg";

describe("Component Avatar", () => {
  it("Should render as expected", () => {
    const { container } = render(<Avatar name={mockName} />);
    expect(container).toMatchSnapshot();
  });

  it("Should render initials of given name", () => {
    const dom = render(<Avatar name={mockName} />);
    const initials = dom.getByText(mockInitials);
    expect(initials).not.toBeNull();
  });

  it("Should render image if src property was provided", () => {
    const { container } = render(<Avatar name={mockName} src={mockSrc} />);
    const img = container.querySelector("img");
    const src = img?.getAttribute("src");

    expect(img).not.toBeNull();
    expect(src).toBe(mockSrc);
  });
});
