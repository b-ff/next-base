import { App } from "./App";
import { render } from "@testing-library/react";

const mockChildren = "content";

describe("Component APP", () => {
  it("Should render as expected", () => {
    const { container } = render(<App>{mockChildren}</App>);
    expect(container).toMatchSnapshot();
  });

  it("Should render given children", () => {
    const dom = render(<App>{mockChildren}</App>);
    const initials = dom.getByText(mockChildren);
    expect(initials).not.toBeNull();
  });
});
