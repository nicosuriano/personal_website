"use client";

import React from "react";
import { useRouter } from "next/navigation";

type ContactButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // properly typed
  href?: string;
  style?: React.CSSProperties;
};

export default function ContactButton({
  children,
  onClick,
  href,
  style,
}: ContactButtonProps) {
  const router = useRouter();
  const buttonStyle = {
    ...(style || {}),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--primaryOrange)",
    color: "white",
    fontFamily: "Hammersmith One, sans-serif",
    fontWeight: "bold",
    fontSize: style?.fontSize || "30px",
    border: "5px solid transparent",
    borderRadius: "14px",
    padding: "20px 20px",
    width: "200px",
    height: "70px",
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "10px",
  };

  const buttonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.color = "var(--primaryOrange)";
    e.currentTarget.style.borderColor = "var(--primaryOrange)";
  };

  const buttonUnhover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "var(--primaryOrange)";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.borderColor = "transparent";
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={buttonHover}
      onMouseLeave={buttonUnhover}
      onClick={onClick ? onClick : () => href && router.push(href)}
      type="button"
    >
      {children}
    </button>
  );
}
