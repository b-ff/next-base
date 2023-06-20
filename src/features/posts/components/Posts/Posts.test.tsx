import { Posts } from "./Posts";
import { render, waitFor } from "@testing-library/react";

beforeEach(() => {
  global.fetch = jest.fn(
    async () =>
      ({
        json: jest.fn(),
      } as any)
  );
});

describe("Component Posts", () => {
  it("Should render as expected", async () => {
    const { container } = render(<Posts />);
    await waitFor(() => expect(global.fetch).toBeCalled());
    expect(container).toMatchSnapshot();
  });
});
