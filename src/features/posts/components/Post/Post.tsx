import { FC } from "react";
import { Flex } from "@/components/Flex";
import { Post as PostModel } from "@/schema";

import styles from "./Post.module.css";

export type PostProps = {
  post: PostModel;
};

/**
 * Post representation
 */
export const Post: FC<PostProps> = (props) => {
  const { post } = props;

  const date = new Intl.DateTimeFormat().format(
    Math.max(
      new Date(post.createdAt)?.getTime(),
      new Date(post.updatedAt)?.getTime()
    )
  );

  return (
    <article>
      <Flex gap={4}>
        <h2>{post.title}</h2>
        <small className={styles.lastModified}>{date}</small>
        <p>{post.body}</p>
      </Flex>
    </article>
  );
};
