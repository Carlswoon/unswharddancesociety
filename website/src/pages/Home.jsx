import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Events from "../components/Events.jsx"
import Footer from "../components/Footer.jsx";
import About from "../components/About.jsx";
import heroBg from "../assets/backgrounds/hero.png";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero

        backgroundImage={heroBg}

        label="UNSW Hard Dance Society"

        title={
          <div className="text-[0.8em]">
            YOUR NEW

            <br />

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
              RAVE FAMILY
            </span>
          </div>
        }

        description="
        More than just a society, we're one big rave family. United by PLUR and our love for hard dance, we welcome everyone from first-time ravers to veterans. Come along to our events, socials, and workshops and be part of the community.
        "

        primaryButton={{
          text: "UPCOMING EVENTS",
          href: "/events",
        }}

        secondaryButton={{
          text: "MEET THE TEAM",
          href: "/team",
        }}

      />

      <Events />

      <About />
      
      <Footer />
    </main>
  );
}