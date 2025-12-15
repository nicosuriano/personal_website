import Image from "next/image";
import HeadShot from "./assets/bioPhoto.png";
import LogoButton from "./components/logoButton";
import NavBar from "./components/nav";
import Footer from "./components/footer";
import ContactButton from "./components/contactButton";
import ImageButton from "./components/imageButton";
import WebEx from "./assets/webEx.png";
import ArtEx from "./assets/artEx.png";
import GraphicEx from "./assets/graphicEx.jpeg";
import Frame from "./assets/pictureFrame.png";
import "./css/homepage.css";
import "./css/logo.css";


export default function Home() {

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Nico 
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Suriano
          </span>
        </div>

        <div className="title-right">
          <div style={{color: "var(--primaryOrange)"}}>Art +</div>
          <div>Design</div>
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
          <ContactButton href="/web_pages/experience"
                         style = {{ width: "150px", fontSize: "19px"}}>
            MORE INFO
          </ContactButton>
        </div>
      </section>

      <section className="bottom-buttons-row">
        <ImageButton 
          label="Website Design"
          image={WebEx}
          href="/web_pages/web"
        />

        <ImageButton 
          label="Creative Expression"
          image={ArtEx}
          href="/web_pages/art"
        />

        <ImageButton 
          label="Graphic Design"
          image={GraphicEx}
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