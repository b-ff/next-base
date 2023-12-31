"use client";
import { FC, ReactNode } from "react";
import styles from "./Layout.module.css";
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
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};
