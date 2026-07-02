import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import EventSection from "../components/EventSection.jsx";
import Footer from "../components/Footer.jsx";
import eventsBg from "../assets/backgrounds/events.jpg";

export default function Event() {
  return (
    <main className="bg-[#03010a] text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero

        backgroundImage={eventsBg}

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

      {/* Events */}
      <EventSection />
      {/* FOOTER */}
      <Footer />
    </main>
  );
}