import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import AboutSection from "../components/AboutInfo.jsx";
import Footer from "../components/Footer.jsx";
import teamBg from "../assets/backgrounds/team.jpg";

export default function About() {
  return (
    <main className="bg-[#03010a] text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero

        backgroundImage={teamBg}

        label="WHO WE ARE"

        title={
          <>
            <span className="text-[0.8em]">
              MORE THAN
            </span>

            <br />

            <span className="text-[0.8em]">
              JUST <s></s>
            </span>

            <span
              className="
                bg-gradient-to-r
                from-[#f0abfc]
                via-[#d946ef]
                to-[#9333ea]
                bg-clip-text
                text-transparent
              "
            >
              <span className="text-[0.8em]">
                MUSIC.
              </span>
            </span>
          </>
        }

        description="
          A dedicated team of students working together to bring
          the hardest events and unforgettable experiences to UNSW
        "

        primaryButton={{
          text: "Meet The Team",
          href: "/team",
        }}
      />

      {/* ABOUT */}
      <AboutSection />
      {/* FOOTER */}
      <Footer />
    </main>
  );
}