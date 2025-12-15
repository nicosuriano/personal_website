import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GalleryGrid from "../../components/galleryGrid";
import CatIdle1 from "../../assets/cat-idle.gif";
import CatWalk1 from "../../assets/cat-walk.gif";
import CatSwat1 from "../../assets/cat-swat.gif";
import CatIdle2 from "../../assets/cat2-idle.gif";
import CatWalk2 from "../../assets/cat2-walk.gif";
import CatSwat2 from "../../assets/cat2-swat.gif";
import Flower from "../../assets/flower.png";
import PictureFrame from "../../assets/pictureFrame.png";
import Plant from "../../assets/plant.png";
import Scene1 from "../../assets/scene1.png";
import Scene2 from "../../assets/scene2.png";
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/imageGrid.css";


export default function GameArt() {

  const Gif1 = [
    { src: CatIdle1, caption: "Cat pixel animation for my game, Cat Sleuth." },
    { src: CatWalk1, caption: "Cat pixel animation for my game, Cat Sleuth." },
    { src: CatSwat1, caption: "Cat pixel animation for my game, Cat Sleuth." },
  ];
  
  const Gif2 = [
    { src: CatIdle2, caption: "Cat pixel animation for my game, Cat Sleuth." },
    { src: CatWalk2, caption: "Cat pixel animation for my game, Cat Sleuth." },
    { src: CatSwat2, caption: "Cat pixel animation for my game, Cat Sleuth." },
  ];

  const Static1 = [
    { src: Flower, caption: "Flower vase pixel art for my game, Cat Sleuth." },
    { src: PictureFrame, caption: "Picture frame pixel art for my game, Cat Sleuth." },
    { src: Plant, caption: "Plant pot pixel art for my game, Cat Sleuth." },
  ];

  const Static2 = [
    { src: Scene1, caption: "First background in pixel art for my game, Cat Sleuth."},
    { src: Scene2, caption: "Second background in pixel art for my game, Cat Sleuth."},
  ];

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Video Game
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Art
          </span>
        </div>
      </header>


      <div className="gallery-description">
        This collection shows my start to video 
        game art and animations. Specifically done 
        in a pixel style.
      </div>

      <div className="gallery-section-header">
        ANIMATIONS
      </div>

      <GalleryGrid images={Gif1}> </GalleryGrid>
      <GalleryGrid images={Gif2}> </GalleryGrid>

      <div className="gallery-section-header">
        STATIC ART
      </div>

      <GalleryGrid images={Static1}> </GalleryGrid>
      <GalleryGrid images={Static2}> </GalleryGrid>

      <Footer />

    </main>
  );
}