import { Session, sessions } from "@/schema"
import { db } from "../connection";
import { eq } from "drizzle-orm";
import { v4 as uuid } from 'uuid'

export const SessionsService = {
  getSession: async (id: string): Promise<Session> => {
    const [session] = await db.select().from(sessions).where(eq(sessions.id, id))
    return session
  },
  getSessionByToken: async (sessionToken: string): Promise<Session> => {
    const [session] = await db.select().from(sessions).where(eq(sessions.sessionToken, sessionToken))
    return session
  },
  create: async (session: Pick<Session, "sessionToken" | "userId" | "expires">) => {
    const values = {
      id: uuid(),
      ...session,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const [createdSession] = await db.insert(sessions).values(values).returning({
      sessionToken: sessions.sessionToken,
      userId: sessions.userId,
      expires: sessions.expires
    })

    return {
      ...createdSession,
      expires: new Date(session.expires)
    }
  },
  update: async (session: Partial<Session> & Pick<Session, "sessionToken">): Promise<Session> => {
    const [updatedSession] = await db.update(sessions).set({
      ...session,
      updatedAt: new Date()
    }).where(eq(sessions.sessionToken, session.sessionToken))

    return updatedSession
  },
  delete: async (sessionToken: string): Promise<void> => {
    await db.delete(sessions).where(eq(sessions.sessionToken, sessionToken))
  }
}