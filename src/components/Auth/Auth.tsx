import { FC } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

import styles from "./Auth.module.css";
import { Avatar } from "../Avatar";

export const Auth: FC = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.auth}>
      {session ? (
        <>
          <Avatar
            src={session.user?.image ?? ""}
            name={session.user?.name ?? ""}
            size={36}
          />
          <div className={styles.details}>
            <strong className={styles.name}>{session.user?.name ?? "—"}</strong>
            <Link href="#" onClick={() => signOut()}>
              Sign out
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link href="#" onClick={() => signIn()}>
            Sign In / Sign Up
          </Link>
        </>
      )}
    </div>
  );
};
