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
    backgroundColor: "white",
    color: "var(--primaryOrange)",
    fontFamily: "Hammersmith One, sans-serif",
    fontWeight: "bold",
    fontSize: style?.fontSize || "25px",
    border: "3px solid",
    borderRadius: "14px",
    padding: "20px 20px",
    width: style?.width || "170px",
    height: style?.height || "70px",
    textAlign: "center" as const,
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "10px 0px",
  };

  const buttonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "var(--primaryOrange)";
    e.currentTarget.style.color = "white";
    e.currentTarget.style.borderColor = "white";
  };

  const buttonUnhover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.color = "var(--primaryOrange)";
    e.currentTarget.style.borderColor = "var(--primaryOrange)";
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
