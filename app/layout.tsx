import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Brett Commandeur | Projects",
  description: "A Collection of Creative Endeavours",
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
        <body>
          <Header></Header>
          {children}
        </body>
      </html>
  );
}
