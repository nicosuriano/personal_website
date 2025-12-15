import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GalleryGrid from "../../components/galleryGrid";
import ArtEx from "../../assets/artEx.png"
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/imageGrid.css";


export default function Art() {

  const images = [
    { src: ArtEx, caption: "16x20 oil paint self portrait on a wooden pannel. (2024)" },
    { src: ArtEx, caption: "16x20 oil paint self portrait on a wooden pannel. (2024)" },
    { src: ArtEx, caption: "16x20 oil paint self portrait on a wooden pannel. (2024)" },
    { src: ArtEx, caption: "16x20 oil paint self portrait on a wooden pannel. (2024)" },
  ];

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Creative
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Expression
          </span>
        </div>
      </header>

      <GalleryGrid images={images}>
        <div>
          This collection includes traditional art,
          sculpture, and expressive visual storytelling.
          These pieces explore mood, identity, movement, 
          and unique aesthetics.
        </div>
      </GalleryGrid>

      <Footer />

    </main>
  );
}