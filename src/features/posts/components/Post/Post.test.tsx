import { Post } from "./Post";
import { render } from "@testing-library/react";

const mockPost = {
  id: 1,
  userId: "that-exact-user-id",
  title: "For whom the bell tolls?",
  body: "For those who refuse to take action and cross the boundaries. For those who complaining instead of doing things. For them we shall fire the torch and spread the light.",
  createdAt: new Date("2023-06-20T14:00:00Z"),
  updatedAt: new Date("2023-06-20T14:00:00Z"),
};

describe("Component Post", () => {
  it("Should render as expected", async () => {
    const { container } = render(<Post post={mockPost} />);
    expect(container).toMatchSnapshot();
  });
});
