import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "flasherr",
  description: "Let's flash it together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='grid'>
        <Header></Header>
          {children}
      </body>
    </html>
  );
}
