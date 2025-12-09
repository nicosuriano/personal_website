import Image from "next/image";
import NSLogo from "./assets/logo.svg";
import HeadShot from "./assets/bioPhoto.png";
import Title from "./assets/webTitle.png";
import LogoButton from "./components/logoButton";
import ContactButton from "./components/contactButton";
import "./css/homepage.css";
import "./css/logo.css";

export default function Home() {      

  return (
    <main className="home-container">
      <LogoButton />
      <ContactButton href="/web_pages/contact">Contact</ContactButton>

      <header className="home-header">
        <div className="title-left">
          Nico 
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>Suriano</span>
        </div>

        <div className="title-right">
          <div style={{color: "var(--primaryOrange)"}}>Art +</div>
          <div>Design</div>
        </div>
      </header>

      <section className="home-images-container">
      </section>

      <section className="home-bottom-buttons">
        <div className="home-logo-container" style={{display: "flex", justifyContent: "flex-start",
                                                     marginTop: "50px"}}>
          <Image
            src={NSLogo}
            alt="Nico Suriano Logo"
            className="home-logo"
          />
        </div>

      </section>

    </main>
  );
}
