"use client";
import { useEffect, useState } from "react";
import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import ContactPage from "../../components/contact";
import "../../css/homepage.css";
import "../../css/contact.css";
import "../../css/logo.css";

export default function Contact() {

  const [animateHeader, setAnimateHeader] = useState(false);
  
  useEffect(() => {
    setAnimateHeader(true); // trigger animation on mount
  }, []);

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className={`title-left ${animateHeader ? "animate" : ""}`} style={{fontSize: "85px"}}>
          Contact
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Information
          </span>
        </div>
      </header>

      <ContactPage></ContactPage>

      <Footer />

    </main>
  );
}