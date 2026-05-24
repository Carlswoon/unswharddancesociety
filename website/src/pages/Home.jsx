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

        label="UNITED BY MUSIC"

        title={
          <>
            HARDER.

            <br />

            TOGETHER.

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
              FOREVER.
            </span>
          </>
        }

        description="
          The home of Hard Dance at UNSW.
          Bringing the community together
          through our passion for harder styles.
        "

        primaryButton={{
          text: "UPCOMING EVENTS",
          href: "/events",
        }}

        secondaryButton={{
          text: "JOIN THE SOCIETY",
          href: "/join",
        }}

      />

      <Events />

      <About />
      
      <Footer />
    </main>
  );
}