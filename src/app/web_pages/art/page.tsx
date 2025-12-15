import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GalleryGrid from "../../components/galleryGrid";
import ArtEx from "../../assets/artEx.png";
import Pen from "../../assets/pen.jpeg";
import WaterColor from "../../assets/waterColor.jpeg";
import Mirror from "../../assets/mirror.jpg";
import Silhouette from "../../assets/silhouette.jpeg";
import Overlap from "../../assets/overlap.jpg";
import Misplaced from "../../assets/misplaced.jpeg";
import Natalie from "../../assets/natalie.jpg";
import Perspective from "../../assets/perspective.jpeg";
import Cats from "../../assets/cats.jpg";
import Dancer from "../../assets/dancer.jpg";
import Line from "../../assets/line.jpeg";
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
    { src: ArtEx, caption: "18x24 oil paint self portrait on a wooden pannel. (2024)" },
    { src: Pen, caption: "8x8 white gel pen stippling self portrait on black paper. (2025)" },
    { src: WaterColor, caption: "16x20 water color self portrait on paper. (2025)" },
  ];

  const AP2 = [
    { src: Mirror, caption: "16x20 oil paint self portrait on canvas. (2025)" },
    { src: Silhouette, caption: "31x36 oil paint self portrait on unstretched canvas. (2025)" },
  ];

  const other1 = [
    { src: Natalie, caption: "16x20 oil paint portrait on canvas. (2025)" },
    { src: Cats, caption: "16x20 white charcoal drawing on a black paper. (2020)" },
    { src: Dancer, caption: "16x20 oil paint portrait on canvas. (2023)" },
  ];

  const other2 = [
    { src: Overlap, caption: "5x7 oil paint self portrait on a wooden pannel. (2024)" },
    { src: Perspective, caption: "10x12 colored pencil perspective drawing on paper. (2023)" },
    { src: Misplaced, caption: "5x7 oil paint self portrait on canvas. (2025)" },
    { src: Line, caption: "10x12 pen continuous line blind contour self portrait on paper. (2023)" },
  ];

  const commission1 = [
    { src: Cat1, caption: "5x7 white/ black charcoal pet portrait on tan paper. (2023)" },
    { src: Dog1, caption: "5x7 white choarcoal pet portrait on black paper. (2021)" },
    { src: Chloe, caption: "10x12 white/ black charcoal pet protrait on tan paper. (2023)" },
  ];
  
  const commission2 = [
    { src: Bo, caption: "10x12 white charcoal pet portrait on black paper. (2022)" },
    { src: Thor, caption: "10x12 white charcoal pet portrait on black paper. (2022)" },
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

      <div className="gallery-section-header">
        OTHER PROJECTS
      </div>

      <GalleryGrid images={other1}> </GalleryGrid>
      <GalleryGrid images={other2}> </GalleryGrid>

      <div className="gallery-section-header">
        COMMISSIONED WORK
      </div>

      <GalleryGrid images={commission1}> </GalleryGrid>
      <GalleryGrid images={commission2}> </GalleryGrid>

      <Footer />

    </main>
  );
}