"use client";

import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/web_pages/experience" },
    { label: "Gallery", href: "/web_pages/gallery" },
    { label: "Contact", href: "/web_pages/contact" },
  ];

  return (
    <nav className="nav-container">
      {navItems.map((item) => (
        <button
          key={item.href}
          className="nav-button"
          onClick={() => router.push(item.href)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}
