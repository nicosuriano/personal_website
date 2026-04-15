"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import HeadShot from "../../assets/headShot.jpeg";
import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import ExperienceCard from "../../components/experienceCard";
import ContactButton from "../../components/contactButton";
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/experience.css";

export default function Experience() {

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
          Design
          <span style={{ color: "var(--primaryOrange)", marginLeft: "20px" }}>
            Experience
          </span>
        </div>
      </header>

       <section className="about-section">
        <Image src={HeadShot} alt="Headshot" className="about-headshot" style={{ height: "325px", width: "350px" }} />

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
        </div>
      </section>

      <section className="exp-section">
        <h2 className="section-title">MY EXPERIENCE</h2>

        <div className="exp-cards">
          <ExperienceCard
            title="RELEVANT COURSES"
            items={[
              "Sports Media",
              "Website & Database Design",
              "AP Drawing",
              "AP Computer Science Principles",
              "AP Computer Science A"
            ]}
          />

          <ExperienceCard
            title="SKILLS"
            items={[
              "Color Theory & Composition",
              "Branding & Visual Identity",
              "Painting & Drawing",
              "Concept Art & Storyboarding",
              "UI/ UX Design",
            ]}
          />

          <ExperienceCard
            title="TOOLS"
            items={[
              "Adobe Illustrator",
              "Adobe Photoshop",
              "Canva Pro",
              "Figma",
              "HTML/CSS",
              "JavaScript",

            ]}
          />

          <ExperienceCard
            title="PROJECTS"
            items={[
              "HSE Graphic Design Work",
              "HSE Sports Website Design",
              "Personal Portfolio Website",
              "AP Drawing Portfolio",
              "Logo Design",
            ]}
          />
        </div>
      </section>
      <ContactButton href="/web_pages/gallery"
                      style = {{ width: "150px", fontSize: "19px"}}>
        VIEW Gallery
      </ContactButton>

      <Footer />
    </main>
  );
}
