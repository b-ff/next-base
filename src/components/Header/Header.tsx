"use client";
import { FC, ReactNode } from "react";
import styles from "./Header.module.css";
import { Auth } from "../Auth";
import Link from "next/link";
import { Flex } from "../Flex";

export type HeaderProps = {
  children?: ReactNode;
};

/**
 * Header of the app
 */
export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Flex direction="row" gap={2}>
        <Link href="/">Home</Link> &raquo;
      </Flex>
      {children}
      <Auth />
    </header>
  );
};
