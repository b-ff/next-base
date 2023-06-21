"use client";
import { Flex } from "@/components/Flex";
import { Post, User } from "@/schema";
import { formatPostDate } from "@/utils";
import Link from "next/link";
import { FC, HTMLProps, useMemo } from "react";

export type PostPreviewProps = HTMLProps<HTMLElement> & {
  post: Post;
  author: Partial<User>;
};

export const PostPreview: FC<PostPreviewProps> = ({ post, author }) => {
  const date = useMemo(
    () =>
      formatPostDate(
        Math.max(
          new Date(parseInt(post.createdAt))?.getTime(),
          new Date(parseInt(post.updatedAt))?.getTime()
        )
      ),
    [post.createdAt, post.updatedAt]
  );

  return (
    <Flex gap={2}>
      <Link href={`/posts/${post.id}`}>
        <h4>{post.title} &raquo;</h4>
      </Link>
      <small>
        Written by {author.name} at {date}
      </small>
    </Flex>
  );
};
