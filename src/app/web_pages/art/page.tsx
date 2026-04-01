"use client";
import { useEffect, useState } from "react";
import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GalleryGrid from "../../components/galleryGrid";
import ArtEx from "../../assets/artEx.png";
import Pen from "../../assets/pen.jpeg";
import WaterColor from "../../assets/waterColor.jpeg";
import Mirror from "../../assets/mirror.jpg";
import Silhouette from "../../assets/silhouette.jpeg";
import WC2 from "../../assets/watercolor2.jpeg";
import Pannel4x8 from "../../assets/pannel4x8.jpg";

import Overlap from "../../assets/overlap.jpg";
import Misplaced from "../../assets/misplaced.jpeg";
import Natalie from "../../assets/natalie.jpg";
import Perspective from "../../assets/perspective.jpeg";
import Cats from "../../assets/cats.jpg";
import Dancer from "../../assets/dancer.jpg";
import Line from "../../assets/line.jpeg";
import GG from "../../assets/GG.jpeg";

import Bo from "../../assets/bo.png";
import Cat1 from "../../assets/cat1.png";
import Chloe from "../../assets/chloe.png";
import Dog1 from "../../assets/dog1.png";
import Thor from "../../assets/thor.png";
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/imageGrid.css";


export default function Art() {

  const AP1 = [
    { src: ArtEx, caption: "18x24 inch oil paint self portrait on a wooden pannel. (2024)" },
    { src: Pen, caption: "8x8 inch white gel pen stippling self portrait on black paper. (2025)" },
    { src: WaterColor, caption: "16x20 inch water color self portrait on paper. (2025)" },
  ];

  const AP2 = [
    { src: Mirror, caption: "16x20 inch oil paint self portrait on canvas. (2025)" },
    { src: WC2, caption: "18x24 inch water color self portrait on paper. (2026)" },
    { src: Silhouette, caption: "31x36 inch oil paint self portrait on unstretched canvas. (2025)" },
  ];

  const AP3 = [
    { src: Pannel4x8, caption: "4x8 foot oil paint self portrait on canvas. (2026)" },
  ];

  const other1 = [
    { src: Natalie, caption: "16x20 inch oil paint portrait on canvas. (2025)" },
    { src: Cats, caption: "16x20 inch white charcoal drawing on a black paper. (2020)" },
    { src: Dancer, caption: "16x20 inch oil paint portrait on canvas. (2023)" },
  ];

  const other2 = [
    { src: Overlap, caption: "5x7 inch oil paint self portrait on a wooden pannel. (2024)" },
    { src: Line, caption: "10x12 inch pen continuous line blind contour self portrait on paper. (2023)" },
    { src: Misplaced, caption: "5x7 inch oil paint self portrait on canvas. (2025)" },
  ];
  
  const other3 = [
    { src: Perspective, caption: "10x12 inch colored pencil perspective drawing on paper. (2023)" },
    { src: GG, caption: "5x7 inch graphite portrait on paper (2026)" },
  ];

  const commission1 = [
    { src: Cat1, caption: "5x7 inch white/ black charcoal pet portrait on tan paper. (2023)" },
    { src: Dog1, caption: "5x7 inch white choarcoal pet portrait on black paper. (2021)" },
    { src: Chloe, caption: "10x12 inch white/ black charcoal pet protrait on tan paper. (2023)" },
  ];
  
  const commission2 = [
    { src: Bo, caption: "10x12 inch white charcoal pet portrait on black paper. (2022)" },
    { src: Thor, caption: "10x12 inch white charcoal pet portrait on black paper. (2022)" },
  ];

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true); // trigger animation on mount
  }, []);

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className={`title-left ${animateHeader ? "animate" : ""}`} style={{fontSize: "85px"}}>
          Creative
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Expression
          </span>
        </div>
      </header>


      <div className="gallery-description">
        This collection includes traditional art,
        sculpture, video game art and expressive visual storytelling.
        These pieces explore mood, identity, movement, 
        and unique aesthetics.
      </div>

      <div className="gallery-section-header">
        AP DRAWING PORTFOLIO
      </div>
      <div className="gallery-section-text">
        The theme I chose is inspired by and is 
        represintitive of main parts of my mental 
        health journey. I am investigating how 
        dissociation and the dissconect between 
        ones body and mind can be visually 
        represented. 
      </div>

      <GalleryGrid images={AP1}> </GalleryGrid>
      <GalleryGrid images={AP2}> </GalleryGrid>
      <GalleryGrid images={AP3}> </GalleryGrid>

      <div className="gallery-section-header">
        OTHER PROJECTS
      </div>

      <GalleryGrid images={other1}> </GalleryGrid>
      <GalleryGrid images={other2}> </GalleryGrid>
      <GalleryGrid images={other3}> </GalleryGrid>

      <div className="gallery-section-header">
        COMMISSIONED WORK
      </div>

      <GalleryGrid images={commission1}> </GalleryGrid>
      <GalleryGrid images={commission2}> </GalleryGrid>

      <Footer />

    </main>
  );
}