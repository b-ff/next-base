import { FC } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const Auth: FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          Signed in as {session.user?.name}
          {" | "}
          <Link href="#" onClick={() => signOut()}>
            Sign out
          </Link>
        </>
      ) : (
        <>
          <Link href="#" onClick={() => signIn()}>
            Sign in
          </Link>
        </>
      )}
    </div>
  );
};
