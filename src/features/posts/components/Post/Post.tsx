import { FC } from "react";
import { Flex } from "@/components/Flex";
import { Post as PostModel } from "@/schema";

import styles from "./Post.module.css";
import Link from "next/link";
import { DEFAULT_LANGUAGE } from "@/config";

const PREVIEW_SIZE = 150;

export type PostProps = {
  post: PostModel;
  preview?: boolean;
};

/**
 * Post representation
 */
export const Post: FC<PostProps> = (props) => {
  const { post, preview = false } = props;

  const date = new Intl.DateTimeFormat(DEFAULT_LANGUAGE, {
    dateStyle: "long",
    timeStyle: "short",
  }).format(
    Math.max(
      new Date(post.createdAt)?.getTime(),
      new Date(post.updatedAt)?.getTime()
    )
  );

  const body = preview
    ? `${post.body.substring(0, PREVIEW_SIZE).trim()}...`
    : post.body;

  return (
    <article>
      <Flex gap={4}>
        <h2>{post.title}</h2>
        <small className={styles.lastModified}>{date}</small>
        <p>{body}</p>
        {Boolean(preview) && (
          <Link href={`/posts/${post.id}`}>Read more &raquo;</Link>
        )}
      </Flex>
    </article>
  );
};
