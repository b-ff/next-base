"use client";
import { Flex } from "@/components/Flex";
import { ApiRoutes } from "@/enums/ApiRoutes";
import { Post as PostModel } from "@/schema";
import { FC, useEffect, useState } from "react";
import { Post } from "../Post";

export const Posts: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(ApiRoutes.Posts)
      .then((response) => response.json())
      .then(setPosts)
      .finally(() => setIsLoading(false));
  }, [setIsLoading, setPosts]);

  return isLoading ? (
    <>Loading...</>
  ) : posts.length ? (
    <Flex gap={2}>
      {posts.map((post: PostModel) => (
        <Post post={post} key={post.id} />
      ))}
    </Flex>
  ) : (
    <>There is no posts yet, come back later...</>
  );
};
