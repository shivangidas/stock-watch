import type { Metadata } from "next";
import "./globals.css";
import Header from "./ui/header";


export const metadata: Metadata = {
  title: "Stock Watch",
  description: "A stock watch app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
