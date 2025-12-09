import type { Metadata } from "next";
import "./css/globals.css";

export const metadata: Metadata = {
  title: "Nico Suriano",
  description: "A Next.js website by Nico Suriano",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logoFavicon.svg" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
