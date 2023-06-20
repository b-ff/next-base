import { Flex } from "./Flex";
import { render } from "@testing-library/react";

const mockChildren = ["Foo", "Bar", "Zoo", "Zar"];
const testId = "flex-test";

describe("Component Flex", () => {
  it("Should render as expected", () => {
    const { container } = render(<Flex>{mockChildren}</Flex>);
    expect(container).toMatchSnapshot();
  });

  it("Should render given children", () => {
    const dom = render(<Flex title={testId}>{mockChildren}</Flex>);
    const container = dom.getByTitle(testId);
    expect(container.childNodes.length).toBe(4);
  });
});
