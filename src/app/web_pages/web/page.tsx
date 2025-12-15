import LogoButton from "../../components/logoButton";
import NavBar from "../../components/nav";
import Footer from "../../components/footer";
import GalleryGrid from "../../components/galleryGrid";
import HomeRR from "../../assets/homepageRR.png"
import MentorRR from "../../assets/mentorRR.png"
import InfoRR from "../../assets/infoRR.png"
import GroupsRR from "../../assets/groupsRR.png"
import "../../css/homepage.css";
import "../../css/logo.css";
import "../../css/imageGrid.css";


export default function WebsiteDesign() {

  const commission1 = [
    { src: HomeRR, caption: "Homepage for Hamilton Southeastern's Royal Rumble website." },
    { src: MentorRR, caption: "Mentor view for Hamilton Southeastern's Royal Rumble website." },
  ];

  const commission2 = [
    { src: InfoRR, caption: "Mentor info page for Hamilton Southeastern's Royal Rumble website." },
    { src: GroupsRR, caption: "All groups view page for Hamilton Southeastern's Royal Rumble website." },
  ];

  return (
    <main className="home-container">
      <LogoButton />
      <NavBar />

      <header className="home-header">
        <div className="title-left">
          Website
          <span style={{color: "var(--primaryOrange)", marginLeft: "20px"}}>
            Design
          </span>
        </div>
      </header>

      <div className="gallery-description">
        My work in website design focuses on usability, 
        clean layout, color relationships, and 
        efficient interaction. I enjoy building modern,
        creative, interfaces using React, Next.js, and 
        strong visual design principles.
      </div>

      <div className="gallery-section-header">
        COMMISSIONED WEBSITES
      </div>
      <div className="gallery-section-text">
        All websites designed by me. Commissioned websites belong to the company.
      </div>

      <GalleryGrid images={commission1}> </GalleryGrid>
      <GalleryGrid images={commission2}> </GalleryGrid>

      <Footer />

    </main>
  );
}