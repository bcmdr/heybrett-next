import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hey Brett",
  description: "Hi there! My name is Brett Commandeur and I'm a creative developer from Alberta, Canada. I enjoy making music, videos, and websites and I'm excited to hear what you think!",
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
