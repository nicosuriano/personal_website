import Image from "next/image";
import NSLogo from "./assets/logo.svg";
import HeadShot from "./assets/bioPhoto.png";
import Title from "./assets/webTitle.png";
import LogoButton from "./components/logoButton";
import "./css/homepage.css";
import "./css/logo.css";

export default function Home() {
  return (
    <main className="home-container">
      <LogoButton />

      <header className="home-header" style={{marginTop: "50px"}}>
        <Image
          src={Title}
          alt="Nico Suriano Header"
          className="home-title"
        />
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
