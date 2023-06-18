import { InferModel } from "drizzle-orm";
import { UpdateDeleteAction, integer } from "drizzle-orm/pg-core";
import { pgTable, serial, text, varchar, timestamp } from "drizzle-orm/pg-core";

const cascadeActions = {onUpdate: 'cascade' as UpdateDeleteAction, onDelete: 'cascade' as UpdateDeleteAction}

export const users = pgTable('users', {
  id: varchar('id', { length: 256 }).primaryKey(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }).notNull(),
  emailVerified: timestamp('email_verified', { mode: "date" }),
  image: text('image'),

  createdAt: timestamp('created_at', { mode: "date" }).notNull(),
  updatedAt: timestamp('updated_at', { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable('verification_tokens', {
  identifier: varchar('identifier', { length: 256 }).primaryKey(),
  token: varchar('token', { length: 256 }).notNull(),
  expires: timestamp('expires', { mode: "date" }).notNull(),

  createdAt: timestamp('created_at', { mode: "date" }).notNull(),
  updatedAt: timestamp('updated_at', { mode: "date" }).notNull(),
})

export const sessions = pgTable('sessions', {
  id: varchar('id', { length: 256 }).primaryKey(),
  expires: timestamp('expires', { mode: "date" }).notNull(),
  sessionToken: varchar('session_token', { length: 256 }).notNull(),
  userId: varchar('user_id', { length: 256 }).references(() => users.id, cascadeActions).notNull(),

  createdAt: timestamp('created_at', { mode: "date" }).notNull(),
  updatedAt: timestamp('updated_at', { mode: "date" }).notNull(),
})

export const accounts = pgTable('accounts', {
  id: varchar('id', { length: 256 }).primaryKey(),
  userId: varchar('user_id', { length: 256 }).references(() => users.id, cascadeActions).notNull(),
  type: varchar('type', { length: 256 }),
  provider: varchar('provider', { length: 256 }),
  providerAccountId: varchar('provider_account_id', { length: 256 }),
  refreshToken: varchar('refresh_token', { length: 256 }),
  accessToken: varchar('access_token', { length: 256 }),
  expiresAt: integer('expires_at'),
  tokenType: varchar('token_type', { length: 256 }),
  scope: varchar('scope', { length: 256 }),
  idToken: text('id_token'),
  sessionState: varchar('session_state', { length: 256 }),

  createdAt: timestamp('created_at', { mode: "date" }).notNull(),
  updatedAt: timestamp('updated_at', { mode: "date" }).notNull(),
})

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 256 }).references(() => users.id, cascadeActions).notNull(),
  title: varchar('title', { length: 256 }).notNull(),
  body: text('body').notNull(),

  createdAt: timestamp('created_at', { mode: "date" }).notNull(),
  updatedAt: timestamp('updated_at', { mode: "date" }).notNull(),
})

export type User = InferModel<typeof users>
export type VerificationToken = InferModel<typeof verificationTokens>
export type Session = InferModel<typeof sessions>
export type Account = InferModel<typeof accounts>
export type Post = InferModel<typeof posts>