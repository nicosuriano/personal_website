"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

type BottomImageButtonProps = {
  label: string;
  image: any;  
  href: string;
};

export default function BottomImageButton({ label, image, href }: BottomImageButtonProps) {
  const router = useRouter();

  const handleClick = () => router.push(href);

  return (
    <button className="bottom-image-button" onClick={handleClick}>
      <div className="bottom-image-wrapper">
        <Image src={image} alt={label} fill className="bottom-image" />

        <div className="bottom-image-overlay" />

        <div className="bottom-image-label">
          {label}
        </div>
      </div>
    </button>
  );
}
