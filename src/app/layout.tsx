"use client";

import { useEffect } from "react";
import "./css/globals.css";

export function DisableRightClick() {
  useEffect(() => {
    const disable = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", disable);
    return () => document.removeEventListener("contextmenu", disable);
  }, []);

  return null;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <DisableRightClick />
      <head>
        <link rel="icon" href="/logoFavicon.svg" sizes="any" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
