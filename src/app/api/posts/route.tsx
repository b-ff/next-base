import { authOptions } from "@/auth";
import { db } from "@/lib/db";
import { posts } from "@/schema";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  const data = await db.select().from(posts);
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/404");
  }

  const fd = await req.formData();

  const { title, body } = Object.fromEntries(fd) as {
    title: string;
    body: string;
  };

  const values = {
    userId: session.user.id,
    title,
    body,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const [result] = await db.insert(posts).values(values).returning();

  return NextResponse.json(result);
}
