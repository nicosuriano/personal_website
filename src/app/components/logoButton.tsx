"use client";

import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import NSLogo from "../assets/personalLogo.png";
import "../css/about.css";

export default function LogoButton() {

  const router = useRouter();

    const handleLogoClick = () => {
        router.push("/");

    };

  return (
    <button className="home-logo-button" onClick={handleLogoClick}>
      <Image
        src={NSLogo}
        alt="Nico Suriano Logo"
        className="logo"
      />
    </button>
  );
}
