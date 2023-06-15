import { db } from "@/lib/db";
import { users } from "@/schema";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  const response = await db.select().from(users);
  return NextResponse.json(response);
}
