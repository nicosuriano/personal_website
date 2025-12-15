"use client";

import { useState, ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

type GalleryItem = {
  src: string | StaticImageData; 
  caption?: string;
};

type GalleryGridProps = {
  images: GalleryItem[];
  children?: ReactNode; 
};

export default function GalleryGrid({ images = [], children }: GalleryGridProps) {
  const [lightboxImage, setLightboxImage] = useState<string | StaticImageData | null>(null);

  const openLightbox = (src: string | StaticImageData) => setLightboxImage(src);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <div className="gallery-section">
      {/* Grid of images */}
      <div className="gallery-grid">
        {images.map((img, index) => (
            <div className="gallery-image-wrapper">
                <div key={index} className="gallery-item" onClick={() => openLightbox(img.src)}>
                    <div className="gallery-watermark">
                        <Image
                            src={img.src}
                            alt="image error"
                            className="gallery-image"
                            width={400}
                            height={300}
                        />
                    </div>
            </div>
            <div className="gallery-caption">{img.caption}</div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay active" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-image-wrapper">
                <div className="gallery-watermark">
                    <Image
                        src={lightboxImage}
                        alt="Large view"
                        className="lightbox-image"
                        width={650}
                    />
                </div>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
