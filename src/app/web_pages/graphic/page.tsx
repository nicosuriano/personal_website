"use client";
import { useEffect, useState } from "react";
import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GalleryGrid from "../../components/galleryGrid";
import MyLogo from "../../assets/myLogo.png"
import LinkHands from "../../assets/LinkhandsLogo.png"
import Poster from "../../assets/poster.png"
import Shirt from "../../assets/shirtLogo.png"
import Innovations from "../../assets/innovationsLogo.jpeg"
import Transition from "../../assets/transitionLogo.png"
import techPoster from "../../assets/techPoster.png"
import hackPoster from "../../assets/hackPoster.png"
import CSShirt from "../../assets/csShirt.png"
import MeanGirls from "../../assets/meanGirls.png"
import Theory from "../../assets/theoryLogo.png"
import NEHSLogo from "../../assets/nehsLogo.png"
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/imageGrid.css";


export default function GraphicDesign() {

  const commission1 = [
    { src: MyLogo, caption: "My person website logo." },
    { src: Innovations, caption: "Royal Innovation Lab logo (through Hamilton Southeastern High School)." },
    { src: LinkHands, caption: "LinkHands app logo." },
    { src: Transition, caption: "Transition Program logo, design based on student drawing (through Hamilton Southeastern High School)." },
  ];
  
  const commission2 = [
    { src: Poster, caption: "Computer Science class pathways poster (through Hamilton Southeastern High School)." },
    { src: techPoster, caption: "Engineering & Techology Expo poster (through Hamilton Southeastern High School)." },
    { src: hackPoster, caption: "2025-2026 Mudsock hackathon poster(through Hamilton Southeastern High School)." },
    { src: Shirt, caption: "Official 2025-2026 school t-shirt of the year (through Hamilton Southeastern High School)." },
  ];
  
  const commission3 = [
    { src: CSShirt, caption: "Computer Science Honor Society t-shirt design front (left) and back (right) (through Hamilton Southeastern High School)." },
    { src: MeanGirls, caption: "False proscenium design for the spring musical (through Hamilton Southeastern High School)." },
    
  ];
  
  const commission4 = [
    { src: NEHSLogo, caption: "National English Honor Society logo (through Hamilton Southeastern High School)." },
    { src: Theory, caption: "Theory Club logo (through Hamilton Southeastern High School)." },

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
          Graphic
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Design
          </span>
        </div>
      </header>

      <div className="gallery-description">
        A wide range of branding, typography, layout, 
        and promotional design work. This section highlights 
        logo design, posters, and merchandise graphics.
      </div>

      <div className="gallery-section-header">
        COMMISSIONED LOGOS
      </div>
      <div className="gallery-section-text">
        All logos designed by me. Logos belong to and use elements from the company.
      </div>

      <GalleryGrid images={commission2}> </GalleryGrid>
      <GalleryGrid images={commission4}> </GalleryGrid>
      <GalleryGrid images={commission3}> </GalleryGrid>
      <GalleryGrid images={commission1}> </GalleryGrid>

      <Footer />

    </main>
  );
}