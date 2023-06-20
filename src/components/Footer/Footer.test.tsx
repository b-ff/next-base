import { Footer } from "./Footer";
import { render } from "@testing-library/react";

const mockChildren = "Content";

describe("Component Footer", () => {
  it("Should render as expected", () => {
    const { container } = render(<Footer>{mockChildren}</Footer>);
    expect(container).toMatchSnapshot();
  });
});
