import { DefaultAdapter } from 'next-auth/adapters'
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import { UsersService } from './services/UsersService'
import { SessionsService } from './services/SessionsService'
import { AccountsService } from './services/AccountsService'
import { VerificationTokensService } from './services/VerificationTokensService'

/** @return { import("next-auth/adapters").Adapter } */
export function PostgresAuthAdapter(db: PostgresJsDatabase<Record<string, never>>): DefaultAdapter {
  return {
    async createUser(user) {
      return UsersService.create(user)
    },
    async getUser(id) {
      return UsersService.getUser(id)
    },
    async getUserByEmail(email) {
      return UsersService.getUserByEmail(email)
    },
    async getUserByAccount({ providerAccountId, provider }) {
      return UsersService.getUserByAccount({ providerAccountId, provider })
    },
    async updateUser(user) {
      return UsersService.update(user)
    },
    async deleteUser(id) {
      return UsersService.delete(id)
    },
    async linkAccount(account) {
      const {
        access_token: accessToken,
        id_token: idToken,
        expires_at: expiresAt,
        token_type: tokenType,
        session_state: sessionState,
        refresh_token: refreshToken,
        ...rest
      } = account

      const values = {
        ...rest,
        accessToken,
        idToken,
        expiresAt,
        tokenType,
        sessionState,
        refreshToken
      }

      await AccountsService.create(values)
    },
    async unlinkAccount({ providerAccountId, provider }) {
      return
    },
    async createSession({ sessionToken, userId, expires }) {
      return SessionsService.create({ sessionToken, userId, expires })
    },
    async getSessionAndUser(sessionToken) {
      const session = await SessionsService.getSessionByToken(sessionToken)

      if (!session) return null

      const user = await UsersService.getUser(session.userId)

      if (!user) return null

      return { session, user }
    },
    async updateSession(session) {
      return SessionsService.update(session)
    },
    async deleteSession(sessionToken) {
      await SessionsService.delete(sessionToken)
    },
    async createVerificationToken(verificationToken) {
      const values = {
        ...verificationToken,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      return await VerificationTokensService.create(values)
    },
    async useVerificationToken({ identifier, token }) {
      return await VerificationTokensService.use({ identifier, token })
    },
  }
}