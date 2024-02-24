import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";

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
