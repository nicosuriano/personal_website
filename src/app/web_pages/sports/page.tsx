"use client";
import { useEffect, useState } from "react";
import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GalleryGrid from "../../components/galleryGrid";
import Volleyball1 from "../../assets/volleyball1.png"
import Football1 from "../../assets/football1.png"
import Hockey1 from "../../assets/hockey1.png"
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/imageGrid.css";


export default function SportsGraphics() {

  const commission1 = [
    { src: Volleyball1, caption: "Volleyball graphic for Hamilton Southeastern's sports website." },
    { src: Football1, caption: "Football graphic for Hamilton Southeastern's sports website." },
    { src: Hockey1, caption: "Hockey graphic for Hamilton Southeastern's sports website." }
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
          Sports
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Graphics
          </span>
        </div>
      </header>

      <div className="gallery-description">
        This collection includes sports-related graphics,
        illustrations, and visual designs. These pieces explore 
        energy, motion, and team pride through bold, engaging visuals.
      </div>

      <div className="gallery-section-header">
        Sports Graphics
      </div>
      <div className="gallery-section-text">
        All graphics designed by me. Photo credits belong to student photographers in Hamilton Southeastern Sports Media.
      </div>

      <GalleryGrid images={commission1}> </GalleryGrid>

      <Footer />

    </main>
  );
}