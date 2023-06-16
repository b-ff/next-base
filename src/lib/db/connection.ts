import postgres from "postgres";
import { Logger } from 'drizzle-orm/logger';
import { drizzle } from "drizzle-orm/postgres-js";
import { DB_LOG, DB_URL } from "@/config";

class MyLogger implements Logger {
  logQuery(query: string, params: unknown[]): void {
    console.log('DB QUERY >>', { query, params });
  }
}

const options = DB_LOG ? { logger: new MyLogger() } : {}

const client = postgres(DB_URL);
export const db = drizzle(client, options);
