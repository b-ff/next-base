import "./globals.css";

export const metadata = {
  title: "Next Base Project",
  description:
    "Base skeleton for Next.js project with i18n, NextAuth and support of PostgreSQL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
