"use client";
import { FC, useEffect, useState } from "react";
import { useApolloClient } from "../../hooks/useApolloClient";
import query from "./GetPosts.graphql";
import { Post, User } from "@/schema";
import { Flex } from "@/components/Flex";
import { PostPreview } from "../PostPreview";

type PostWithAuthor = Omit<Post, "userId"> & {
  author: Pick<User, "name">;
};

export const PostsPage: FC = () => {
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);

  useEffect(() => {
    client
      ?.query({
        query,
      })
      .then(({ data }) => setPosts(data.posts))
      .finally(() => setIsLoading(false));
  }, [client, setPosts]);

  return (
    <Flex gap={6}>
      {isLoading ? (
        <p>Loading posts...</p>
      ) : posts.length ? (
        posts.map(({ author, ...post }) => (
          <PostPreview
            author={author}
            post={{ ...post, userId: "" }}
            key={post.id}
          />
        ))
      ) : (
        <p>There is no posts yet, come back later...</p>
      )}
    </Flex>
  );
};
