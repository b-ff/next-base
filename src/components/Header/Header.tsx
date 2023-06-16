"use client";
import { FC, ReactNode } from "react";
import styles from "./Header.module.css";
import { Auth } from "../Auth";
import Link from "next/link";

export type HeaderProps = {
  children?: ReactNode;
};

/**
 * Header of the app
 */
export const Header: FC<HeaderProps> = ({ children }) => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      {children}
      <Auth />
    </header>
  );
};
