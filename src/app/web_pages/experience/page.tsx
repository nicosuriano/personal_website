import Image from "next/image";
import HeadShot from "../../assets/bioPhoto.png";
import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import ExperienceCard from "../../components/experienceCard";
import ContactButton from "../../components/contactButton";
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/experience.css";

export default function Experience() {
  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Design
          <span style={{ color: "var(--primaryOrange)", marginLeft: "20px" }}>
            Experience
          </span>
        </div>
      </header>

       <section className="about-section">
        <Image src={HeadShot} alt="Headshot" className="about-headshot" />

        <div className="about-box">
          <h2>ABOUT ME</h2>
          <div className="about-textbox">
            I’m a designer and developer with experience in traditional art,
            logo design, and web development. I enjoy creating things that
            feel meaningful, tell a story and represent creativity. I’ve worked 
            across traditional art, digital art, graphic design, and web 
            development, and I’m currently exploring computer science, art, and design 
            as a high school senior. Next year I will be attending Rochester Institute
            of Technology to study 3D Digital Design and expand my design experience 
            into the world of video games.
          </div>
        </div>
      </section>

      <section className="exp-section">
        <h2 className="section-title">MY EXPERIENCE</h2>

        <div className="exp-cards">
          <ExperienceCard
            title="AP COURSES"
            items={[
              "AP Computer Science Principles",
              "AP Seminar",
              "AP Computer Science A",
              "AP Research",
              "AP Drawing",
            ]}
          />

          <ExperienceCard
            title="SKILLS"
            items={[
              "Painting, Drawing, Sketching, Sculpting",
              "Illustration, Concept Art, Storyboarding",
              "Color Theory, Composition, Visual Design",
              "Wireframing, Prototyping, Interaction Design",
            ]}
          />

          <ExperienceCard
            title="PROJECTS"
            items={[
              "Personal Portfolio Website",
              "AP Drawing Portfolio",
              "Logo Design",
              "School Graphic Design Work",
              "School Website Design",
            ]}
          />
        </div>
      </section>
      <ContactButton href="/web_pages/experience"
                     style = {{ width: "200px", fontSize: "25px"}}>
        VIEW WORK
      </ContactButton>

      <Footer />
    </main>
  );
}
