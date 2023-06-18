import { Account, accounts } from "@/schema"
import { db } from "../connection";
import { v4 as uuid } from 'uuid'

export const AccountsService = {
  create: async (account: Omit<Partial<Account>, "id" | "createdAt" | "updatedAt"> & Pick<Account, "userId">): Promise<Account> => {
    const values = {
      ...account,
      id: uuid(),
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const [createdAccount] = await db.insert(accounts).values(values)

    return createdAccount
  }
}