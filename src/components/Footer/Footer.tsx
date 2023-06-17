"use client";
import { FC, ReactNode } from "react";
import styles from "./Footer.module.css";

export type FooterProps = {
  children?: ReactNode;
};

/**
 * Footer of the app
 */
export const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <header className={styles.footer}>
      {children}
      <span>
        <a
          href="https://github.com/b-ff"
          target="_blank"
          rel="noopener noreffer"
        >
          Slava Biryukov
        </a>{" "}
        x {new Date().getFullYear()} {children}
      </span>
    </header>
  );
};
