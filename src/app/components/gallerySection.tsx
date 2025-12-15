"use client";
import Image from "next/image";
import "../css/gallery.css";

type GallerySectionProps = {
  title: string;
  image: any;
  description: string;
  href: string;
};

export default function GallerySection({
  title,
  image,
  description,
  href,
}: GallerySectionProps) {
  return (
    <section className="gallery-section">
      <div className="gallery-image-container">
        <div className="gallery-watermark">
          <Image
            src={image}
            alt={title}
            className="gallery-section-image"
          />
        </div>
      </div>

      <div className="gallery-text-box">
        <h2>{title}</h2>
        <p>{description}</p>

        <button
          className="gallery-view-button"
          onClick={() => (window.location.href = href)}
        >
          View More
        </button>
      </div>
    </section>
  );
}
