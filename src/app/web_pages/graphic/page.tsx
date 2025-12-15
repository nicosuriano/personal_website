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
import Hosa from "../../assets/hseHosaLogo.jpeg"
import CS from "../../assets/hseCSLogo.png"
import RR from "../../assets/RRLogo.png"
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/imageGrid.css";


export default function GraphicDesign() {

  const commission1 = [
    { src: MyLogo, caption: "My person website logo." },
    { src: Transition, caption: "Transition Program logo, design based on student drawing (through Hamilton Southeastern High School)." },
    { src: LinkHands, caption: "LinkHands app logo." },
    { src: Innovations, caption: "Royal Innovation Lab logo (through Hamilton Southeastern High School)." },
  ];

  const commission2 = [
    { src: RR, caption: "Logo for the Hamilton Southeastern High School Royal Rumble website (through Hamilton Southeastern High School). " },
    { src: Hosa, caption: "Logo for the Hamilton Southeastern High School branch of HOSA (through Hamilton Southeastern High School). " },
    { src: CS, caption: "Logo for the Hamilton Southeastern High School computer science program (through Hamilton Southeastern High School). " },
  ];
  
  const commission3 = [
    { src: Poster, caption: "Computer Science class pathways poster (through Hamilton Southeastern High School)." },
    { src: Shirt, caption: "Official 2025-2026 school t-shirt of the year (through Hamilton Southeastern High School)." },
  ];

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Graphic
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Design
          </span>
        </div>
      </header>

      <div className="gallery-description">
        A wide range of branding, typography, layout, 
        and promotional design work. This section highlights 
        logo design, posters and merchandise graphics.
      </div>

      <div className="gallery-section-header">
        COMMISSIONED LOGOS
      </div>
      <div className="gallery-section-text">
        All logos designed by me. Logos belong to and use elements from the company.
      </div>

      <GalleryGrid images={commission1}> </GalleryGrid>
      <GalleryGrid images={commission2}> </GalleryGrid>
      <GalleryGrid images={commission3}> </GalleryGrid>

      <Footer />

    </main>
  );
}