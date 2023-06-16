"use client";
import { FC, HTMLProps, ReactNode } from "react";
import styles from "./Avatar.module.css";
import { classNames } from "@/utils";

const DEFAULT_SIZE = 24;

export type AvatarProps = HTMLProps<HTMLElement> & {
  src?: string;
  name: string;
  size?: number;
};

/**
 * Shows user profile picture
 */
export const Avatar: FC<AvatarProps> = (props) => {
  const {
    src = "",
    name = "",
    size = DEFAULT_SIZE,
    className = "",
    ...rest
  } = props;

  return (
    <figure
      className={classNames([styles.avatar, className])}
      style={{ width: size, height: size }}
      {...rest}
    >
      <div
        className={styles.initials}
        style={{ fontSize: Math.round(size * 0.4) }}
      >
        {name
          .toLocaleUpperCase()
          .split(" ")
          .map((word) => word[0])
          .join("")}
      </div>
      {Boolean(src) && <img src={src} alt={name} className={styles.image} />}
    </figure>
  );
};
