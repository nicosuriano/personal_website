"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeadShot from "./assets/headShot.jpeg";
import LogoButton from "./components/logoButton";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import ContactButton from "./components/contactButton";
import ImageButton from "./components/imageButton";
import Volleyball1 from "./assets/volleyball1.png";
import ArtEx from "./assets/artEx.png";
import NEHSLogo from "./assets/nehsLogo.png";
import Frame from "./assets/pictureFrame.png";
import "./css/homepage.css";
import "./css/logo.css";


export default function Home() {

  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    setAnimateHeader(true); // trigger animation on mount
  }, []);

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className={`title-left ${animateHeader ? "animate" : ""}`}>
          Nico 
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Suriano
          </span>
        </div>

        <div className={`title-right ${animateHeader ? "animate" : ""}`}>
          <div style={{color: "var(--primaryOrange)"}}>Art +</div>
          <div>Design</div>
        </div>
      </header>

      <section className="about-section">
        <Image src={HeadShot} alt="Headshot" className="about-headshot" />

        <div className="about-box">
          <h2>ABOUT ME</h2>
          <div className="about-textbox">
            I’m a designer and developer with a background in traditional art, graphic design, 
            and UI/UX design, with a growing interest in sports graphics. My work centers on 
            creating purposeful, story-driven visuals that balance creativity with clear 
            communication. I’ve designed graphics, websites, logos, and event materials for 
            school organizations, developing a strong sense of layout, branding, and visual 
            consistency. With a foundation in fine art through AP Drawing and as an incoming 
            Rochester Institute of Technology student studying digital design and visual arts, 
            I approach design with both technical skill and artistic perspective. Recently, 
            I’ve begun applying these skills to sports design, where I explore energy, motion, 
            and identity through bold, engaging visuals.
          </div>
          <ContactButton href="/web_pages/experience"
                         style = {{ width: "150px", fontSize: "19px"}}>
            MORE INFO
          </ContactButton>
        </div>
      </section>

      <section className="bottom-buttons-row">
        <ImageButton 
          label="Creative Expression"
          image={ArtEx}
          href="/web_pages/art"
        />

        <ImageButton 
          label="Sports Graphics"
          image={Volleyball1}
          href="/web_pages/sports"
        />

        <ImageButton 
          label="Graphic Design"
          image={NEHSLogo}
          href="/web_pages/graphic"
        />
        
        <ImageButton 
          label="Video Game Art"
          image={Frame}
          href="/web_pages/gameArt"
        />
      </section>

      <Footer />

    </main>
  );
}