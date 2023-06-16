CREATE TABLE IF NOT EXISTS "accounts" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"type" varchar(256),
	"provider" varchar(256),
	"provider_account_id" varchar(256),
	"refresh_token" varchar(256),
	"access_token" varchar(256),
	"expires_at" integer,
	"token_type" varchar(256),
	"scope" varchar(256),
	"id_token" text,
	"session_state" varchar(256),
	"created_at" timestamp,
	"updated_at" timestamp
);

CREATE TABLE IF NOT EXISTS "sessions" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"expires" timestamp NOT NULL,
	"session_token" varchar(256) NOT NULL,
	"user_id" varchar(256) NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);

CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(256) PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256) NOT NULL,
	"email_verified" timestamp,
	"image" text,
	"created_at" timestamp,
	"updated_at" timestamp
);

CREATE TABLE IF NOT EXISTS "verification_tokens" (
	"identifier" varchar(256) PRIMARY KEY NOT NULL,
	"token" varchar(256) NOT NULL,
	"expires" timestamp NOT NULL,
	"created_at" timestamp,
	"updated_at" timestamp
);

DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;

DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
