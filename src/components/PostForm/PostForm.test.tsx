import { PostForm } from "./PostForm";
import { render } from "@testing-library/react";

describe("Component PostForm", () => {
  it("Should render as expected", () => {
    const { container } = render(<PostForm />);
    expect(container).toMatchSnapshot();
  });
});
