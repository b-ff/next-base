import { authOptions } from "@/auth";
import { db } from "@/lib/db";
import { PostsService } from "@/lib/db";
import { posts } from "@/schema";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  const data = await PostsService.getPosts();
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
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const result = await PostsService.create(values);

  return NextResponse.json(result);
}
