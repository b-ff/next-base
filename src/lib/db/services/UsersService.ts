import { User, accounts, users } from "@/schema"
import { db } from "../connection";
import { and, eq } from "drizzle-orm";
import { v4 as uuid } from 'uuid'

export const UsersService = {
  getUserById: async (id: string): Promise<User> => {
    const [user] = await db.select().from(users).where(eq(users.id, id))
    return user
  },
  getUserByEmail: async (email: string): Promise<User> => {
    const [user] = await db.select().from(users).where(eq(users.email, email))
    return user
  },
  getUserByAccount: async ({ providerAccountId, provider }: { providerAccountId: string, provider: string }): Promise<User | null> => {
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
  create: async (user: Pick<User, "email" | "emailVerified">): Promise<User> => {
    const values = {
      id: uuid(),
      ...user,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const [createdUser] = await db.insert(users).values(values).returning()

    return createdUser
  },
  update: async(user: Partial<User> & Pick<User, "id">): Promise<User> => {
    const [updatedUser] = await db.update(users).set({
      ...user,
      updatedAt: new Date()
    }).where(eq(users.id, user.id)).returning()

    return updatedUser
  },
  delete: async(id: string) => {
    const [deletedUser] = await db.delete(users).where(eq(users.id, id)).returning({
      id: users.id,
      email: users.email,
      emailVerified: users.emailVerified
    })

    return deletedUser
  },
}