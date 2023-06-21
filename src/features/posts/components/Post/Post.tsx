import { FC } from "react";
import { Flex } from "@/components/Flex";
import { Post as PostModel } from "@/schema";

import styles from "./Post.module.css";
import Link from "next/link";
import { formatPostDate } from "@/utils";

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

  const date = formatPostDate(
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
        {Boolean(preview) ? <h2>{post.title}</h2> : <h1>{post.title}</h1>}
        <small className={styles.lastModified}>{date}</small>
        <p>{body}</p>
        {Boolean(preview) ? (
          <Link href={`/posts/${post.id}`}>Read more &raquo;</Link>
        ) : null}
      </Flex>
    </article>
  );
};
