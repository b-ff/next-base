import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { fontsClassName } from "@/fonts";

import "./reset.css";
import "./globals.css";

export const metadata = {
  title: "Next Base Project",
  description:
    "Base skeleton for Next.js project with i18n, NextAuth and support of PostgreSQL",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  console.log({ session });

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <body className={fontsClassName}>{children}</body>
    </html>
  );
}
