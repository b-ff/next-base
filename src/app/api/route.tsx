import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  return NextResponse.json({ foo: "bar" });
}
