import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GallerySection from "../../components/gallerySection";

import WebEx from "../../assets/webEx.png";
import ArtEx from "../../assets/artEx.png";
import GraphicEx from "../../assets/graphicEx.jpeg";

import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/gallery.css";

export default function Gallery() {
  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Design
          <span style={{ color: "var(--primaryOrange)", marginLeft: "20px" }}>
            Gallery
          </span>
        </div>
      </header>

      <GallerySection
        title="Website Design"
        image={WebEx}
        description="My work in website design focuses on usability, 
                    clean layout, color relationships, and 
                    efficient interaction. I enjoy building modern,
                    creative, interfaces using React, Next.js, and 
                    strong visual design principles."
        href="/web_pages/web"
      />

      <GallerySection
        title="Creative Expression"
        image={ArtEx}
        description="This collection includes traditional art,
                    sculpture, and expressive visual storytelling.
                    These pieces explore mood, identity, movement, 
                    and unique aesthetics."
        href="/web_pages/art"
      />

      <GallerySection
        title="Graphic Design"
        image={GraphicEx}
        description="A wide range of branding, typography, layout, 
                    and promotional design work. This section highlights 
                    logo design, posters and merchandise graphics."
        href="/web_pages/graphic"
      />

      <Footer />
    </main>
  );
}
