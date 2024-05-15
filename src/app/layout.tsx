import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin-ext", "cyrillic-ext"],
  variable: "--font-base",
});

export const metadata: Metadata = {
  title: "Aceplace Test Task",
  description: "Trial task for the FE dev vacancy at Aceplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
