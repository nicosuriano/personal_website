import Image from "next/image";
import NSLogo from "./assets/personalLogo.png";
import HeadShot from "./assets/bioPhoto.png";
import LogoButton from "./components/logoButton";
import "./css/homepage.css";
import "./css/logo.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Home() {
  return (
    <main className="home-container">
      <LogoButton />

      <header className="home-header">
        <h1 className="home-title">Nico Suriano</h1>
      </header>

      <section className="home-images-container">
        <div className="home-logo-container">
          <Image
            src={NSLogo}
            alt="Nico Suriano Logo"
            className="home-logo"
          />
        </div>
        
          <Image
            src={HeadShot}
            alt="Nico Suriano Headshot"
            className="headshot-image"
          />

      </section>

      <section className="home-bottom-buttons">

      </section>

    </main>
  );
}
