"use client";
import { FC, ReactNode } from "react";
import styles from "./Layout.module.css";
import { Auth } from "../Auth";
import { SessionProvider } from "next-auth/react";
import { Header } from "../Header";
import { Footer } from "../Footer";

export type LayoutProps = {
  children: ReactNode;
};

/**
 * Main layout of the app
 */
export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <SessionProvider>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </SessionProvider>
  );
};
