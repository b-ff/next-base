import { Header } from "./Header";
import { render } from "@testing-library/react";

const mockChildren = "Content";

describe("Component Header", () => {
  it("Should render as expected", () => {
    const { container } = render(<Header>{mockChildren}</Header>);
    expect(container).toMatchSnapshot();
  });
});
