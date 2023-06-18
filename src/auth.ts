import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PostgresAuthAdapter, db } from "./lib/db";
import { Session } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

export type SessionWithUserId = Session & {
  user?: {
    id?: string | null
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export const authOptions = {
  adapter: PostgresAuthAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || ''
    })
  ],
  callbacks: {
    session: async ({ session, user }: {session: SessionWithUserId, user: AdapterUser}): Promise<SessionWithUserId> => {
      if (session?.user) {
        session.user.id = user.id;
      }
      return session;
    },
}
}