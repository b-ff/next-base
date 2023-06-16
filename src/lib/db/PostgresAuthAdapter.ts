import { DefaultAdapter } from 'next-auth/adapters'
import { accounts, sessions, users, verificationTokens } from '@/schema'
import { and, eq } from 'drizzle-orm'
import { v4 as uuid } from 'uuid'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

/** @return { import("next-auth/adapters").Adapter } */
export function PostgresAuthAdapter(db: PostgresJsDatabase<Record<string, never>>): DefaultAdapter {
  return {
    async createUser(user) {
      const values = {
        id: uuid(),
        ...user,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const [createdUser] = await db.insert(users).values(values).returning({
        id: users.id,
        name: users.name,
        email: users.email,
        image: users.image,
        emailVerified: users.emailVerified
      })

      return createdUser
    },
    async getUser(id) {
      const [user] = await db.select().from(users).where(eq(users.id, id))
      return user
    },
    async getUserByEmail(email) {
      const [user] = await db.select().from(users).where(eq(users.email, email))
      return user
    },
    async getUserByAccount({ providerAccountId, provider }) {
      const [account] = await db.select({
        id: accounts.userId
      }).from(accounts).where(
        and(
          eq(accounts.providerAccountId, providerAccountId),
          eq(accounts.provider, provider),
        )
      )

      if (!account) return null

      const [user] = await db.select().from(users).where(eq(users.id, account.id))

      return user
    },
    async updateUser(user) {
      const [updatedUser] = await db.update(users).set({
        ...user,
        updatedAt: new Date()
      }).where(eq(users.id, user.id)).returning({
        id: users.id,
        email: users.email,
        emailVerified: users.emailVerified
      })

      return updatedUser
    },
    async deleteUser(id) {
      const [deletedUser] = await db.delete(users).where(eq(users.id, id)).returning({
        id: users.id,
        email: users.email,
        emailVerified: users.emailVerified
      })

      return deletedUser
    },
    async linkAccount(account) {
      const {
        access_token: accessToken,
        id_token: idToken,
        expires_at: expiresAt,
        token_type: tokenType,
        ...rest
      } = account

      const values = {
        ...rest,
        accessToken,
        idToken,
        expiresAt,
        tokenType,
        id: uuid(),
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const [createdAccount] = await db.insert(accounts).values(values)

      return createdAccount
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return
    },
    async createSession({ sessionToken, userId, expires }) {
      const values = {
        id: uuid(),
        sessionToken,
        userId,
        expires,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const [session] = await db.insert(sessions).values(values).returning({
        sessionToken: sessions.sessionToken,
        userId: sessions.userId,
        expires: sessions.expires
      })

      return {
        ...session,
        expires: new Date(session.expires)
      }
    },
    async getSessionAndUser(sessionToken) {
      const [session] = await db.select().from(sessions).where(eq(sessions.sessionToken, sessionToken))

      if (!session) return null

      const [user] = await db.select().from(users).where(eq(users.id, session.userId))

      if (!user) return null

      return { session, user }
    },
    async updateSession(session) {
      const [updatedSession] = await db.update(sessions).set({
        ...session,
        updatedAt: new Date()
      }).where(eq(sessions.sessionToken, session.sessionToken))

      return updatedSession
    },
    async deleteSession(sessionToken) {
      await db.delete(sessions).where(eq(sessions.sessionToken, sessionToken))
    },
    async createVerificationToken(verificationToken) {
      const values = {
        ...verificationToken,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      const [createdToken] = await db.insert(verificationTokens).values(values).returning({
        identifier: verificationTokens.identifier,
        token: verificationTokens.token,
        expires: verificationTokens.expires
      })

      return createdToken
    },
    async useVerificationToken({ identifier, token }) {
      const [deletedToken] = await db.delete(verificationTokens).where(
        and(
          eq(verificationTokens.identifier, identifier),
          eq(verificationTokens.token, token)
        )
      ).returning({
        identifier: verificationTokens.identifier,
        token: verificationTokens.token,
        expires: verificationTokens.expires,
      })

      return deletedToken
    },
  }
}