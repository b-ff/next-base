import { Layout } from "./Layout";
import { render } from "@testing-library/react";

const mockChildren = "Content";

describe("Component Layout", () => {
  it("Should render as expected", () => {
    const { container } = render(<Layout>{mockChildren}</Layout>);
    expect(container).toMatchSnapshot();
  });
});
