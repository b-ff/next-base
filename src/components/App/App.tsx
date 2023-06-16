import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

export type AppProps = {
  children: ReactNode;
};

export const App: FC<AppProps> = ({ children }) => (
  <SessionProvider>{children}</SessionProvider>
);
