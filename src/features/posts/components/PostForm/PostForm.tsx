import { FC, HTMLProps } from "react";
import { Flex } from "@/components/Flex";
import { Post as PostModel } from "@/schema";
import { ApiRoutes } from "@/enums/ApiRoutes";

import styles from "./PostForm.module.css";
import { classNames } from "@/utils";

/**
 * Form to create new post
 */
export const PostForm: FC<HTMLProps<HTMLFormElement>> = (props) => {
  const { className } = props;
  return (
    <form
      method="POST"
      action={ApiRoutes.Posts}
      className={classNames([styles.form, className])}
      {...props}
    >
      <Flex gap={2}>
        <input
          type="text"
          name="title"
          placeholder="Title..."
          className={styles.title}
        />
        <textarea name="body" placeholder="Text..." className={styles.body} />
        <Flex gap={2} direction="row" className={styles.actions}>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </Flex>
      </Flex>
    </form>
  );
};
