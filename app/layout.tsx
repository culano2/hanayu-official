import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HANAYU | Premium Seafood from Huayu Island",
  description:
    "Premium island seafood from HANAYU, landed early, cold-handled, and prepared for chefs and buyers who value origin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
