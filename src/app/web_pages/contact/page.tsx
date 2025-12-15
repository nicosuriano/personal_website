import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import ContactPage from "../../components/contact";
import "../../css/homepage.css";
import "../../css/contact.css";
import "../../css/logo.css";


export default function Contact() {

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
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