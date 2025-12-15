"use client";

import Image from "next/image";
import "../css/homepage.css";
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
        <div className="watermarked-image">
          <Image src={image} alt={label} fill className="bottom-image" />
        </div>

        <div className="bottom-image-overlay" />

        <div className="bottom-image-label">
          {label}
        </div>
      </div>
    </button>
  );
}
