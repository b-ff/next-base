import { FC } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import styles from "./Auth.module.css";
import { Avatar } from "../Avatar";
import { Flex } from "../Flex";

export const Auth: FC = () => {
  const { data: session } = useSession();

  return session ? (
    <Flex gap={2} direction="row" className={styles.auth}>
      <Link
        href="/profile"
        title="Go to profile"
        className={styles.profileLink}
      >
        <Avatar
          src={session.user?.image ?? ""}
          name={session.user?.name ?? ""}
          size={36}
        />
      </Link>
      <Flex gap={0}>
        <strong className={styles.name}>{session.user?.name ?? "—"}</strong>
        <Link href="#" onClick={() => signOut()}>
          Sign Out
        </Link>
      </Flex>
    </Flex>
  ) : (
    <Link href="#" onClick={() => signIn()}>
      Sign In / Sign Up
    </Link>
  );
};
