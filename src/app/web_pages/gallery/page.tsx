import Image from "next/image";
import HeadShot from "./assets/bioPhoto.png";
import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import ContactButton from "../../components/contactButton";
import ImageButton from "../../components/imageButton";
import WebEx from "../../assets/webEx.png";
import ArtEx from "../../assets/artEx.png";
import GraphicEx from "../../assets/graphicEx.jpeg";
import "../../css/homepage.css";
import "../../css/logo.css";


export default function Gallery() {

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Design
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Gallery
          </span>
        </div>
      </header>

      <Footer />

    </main>
  );
}