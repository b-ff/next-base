"use client";
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useApolloClient } from "../../hooks/useApolloClient";
import { Post, User } from "@/schema";
import { Flex } from "@/components/Flex";
import { PostPreview } from "../PostPreview";
import { PostForm } from "@/components/PostForm";

import query from "./GetPosts.graphql";
import mutation from "./CreatePost.graphql";

type PostWithAuthor = Omit<Post, "userId"> & {
  author: Pick<User, "name">;
};

export const PostsPage: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const client = useApolloClient();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);

  const getPosts = useCallback(() => {
    return client
      ?.query({
        query,
        fetchPolicy: "no-cache",
      })
      .then(({ data }) => setPosts(data.posts))
      .finally(() => setIsLoading(false));
  }, [client, setPosts]);

  const handleFormSubmit = useCallback(
    (event: FormEvent) => {
      const variables = Object.fromEntries(
        new FormData(event.target as HTMLFormElement)
      );

      client
        ?.mutate({
          mutation,
          fetchPolicy: "no-cache",
          variables,
        })
        .then(() => getPosts())
        .finally(() => {
          setIsLoading(false);
          formRef.current?.reset();
        });

      event.preventDefault();

      setIsLoading(true);
    },
    [client, getPosts, setIsLoading]
  );

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Flex gap={6}>
      <Flex gap={4}>
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
      <h2>Create post</h2>
      <PostForm ref={formRef} onSubmit={handleFormSubmit} />
    </Flex>
  );
};
