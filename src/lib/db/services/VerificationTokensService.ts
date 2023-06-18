import { VerificationToken, verificationTokens } from "@/schema"
import { db } from "../connection";
import { and, eq } from "drizzle-orm";
import { v4 as uuid } from 'uuid'

export const VerificationTokensService = {
  create: async (verificationToken: Omit<VerificationToken, "createdAt" | "updatedAt">): Promise<VerificationToken> => {
    const values = {
      ...verificationToken,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    const [createdToken] = await db.insert(verificationTokens).values(values).returning()

    return createdToken
  },
  use: async (verificationToken: Pick<VerificationToken, "identifier" | "token">): Promise<VerificationToken> => {
    const { identifier, token } = verificationToken
    const [deletedToken] = await db.delete(verificationTokens).where(
      and(
        eq(verificationTokens.identifier, identifier),
        eq(verificationTokens.token, token)
      )
    ).returning()

    return deletedToken
  }
}