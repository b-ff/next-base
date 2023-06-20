"use client";
import { FC, HTMLProps, useEffect, useRef, useState } from "react";
import styles from "./Avatar.module.css";
import { classNames } from "@/utils";
import Image from "next/image";

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

  const imageRef = useRef<HTMLImageElement>(null);

  const [showImage, setShowImage] = useState<boolean>(Boolean(src));

  useEffect(() => {
    const imageElement = imageRef.current;

    const loadErrorHandler = () => setShowImage(false);

    if (showImage && imageElement) {
      imageElement.addEventListener("error", loadErrorHandler);
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener("error", loadErrorHandler);
      }
    };
  }, [imageRef, showImage, setShowImage]);

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
      {showImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={imageRef} src={src} alt={name} className={styles.image} />
      )}
    </figure>
  );
};
