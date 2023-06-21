import { PostPreview } from "./PostPreview";
import { render } from "@testing-library/react";

const mockPost = {
  id: 1,
  userId: "that-exact-user-id",
  title: "For whom the bell tolls?",
  body: "For those who refuse to take action and cross the boundaries. For those who complaining instead of doing things. For them we shall fire the torch and spread the light.",
  createdAt: "2023-06-20T14:00:00",
  updatedAt: "2023-06-20T14:00:00",
};

const mockAuthor = {
  id: "that-exact-user-id",
  name: "John Doe",
};

describe("Component PostPreview", () => {
  it("Should render as expected", () => {
    const { container } = render(
      <PostPreview post={mockPost} author={mockAuthor} />
    );
    expect(container).toMatchSnapshot();
  });
});
