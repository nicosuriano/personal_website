"use client";

import Image from "next/image";
import NSLogo from "../assets/logo.svg";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Footer() {

    const pathname = usePathname();
    const router = useRouter();

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        } 
    };

    const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/web_pages/experience" },
    { label: "Gallery", href: "/web_pages/gallery" },
    { label: "Contact", href: "/web_pages/contact" },
  ];
  return (
    <footer className="footer-container">
        <div className="footer-left">
            <Image src={NSLogo} alt="NS Logo" className="footer-logo" />

            <a
                href="https://www.instagram.com/surianostudios"
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="footer-icon">
                    <i className="bi bi-instagram"></i>
                </div>
            </a>
        </div>

        <div className="footer-right">
            <nav className="footer-nav">
                <Link
                    href="/"
                    className="footer-nav-item"
                    onClick={handleHomeClick}
                >
                    Home
                </Link>

                <Link href="/web_pages/experience" className="footer-nav-item">
                    About
                </Link>
                <Link href="/web_pages/gallery" className="footer-nav-item">
                    Gallery
                </Link>
                <Link href="/web_pages/contact" className="footer-nav-item">
                    Contact
                </Link>
            </nav>
        </div>
    </footer>
  );
}
