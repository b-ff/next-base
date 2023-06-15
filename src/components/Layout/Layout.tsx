"use client";
import { FC, ReactNode } from "react";
import styles from "./Layout.module.css";
import { Auth } from "../Auth";
import { SessionProvider } from "next-auth/react";

export type LayoutProps = {
  children: ReactNode;
};

/**
 * Main layout of the app
 */
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SessionProvider>
      <header className={styles.header}>
        <Auth />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </SessionProvider>
  );
};
