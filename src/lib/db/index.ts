import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { CONNECTION_STRING } from "@/config";

const client = postgres(CONNECTION_STRING);
export const db = drizzle(client);