// Events.jsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MeetTheTeam from "../components/MeetTheTeam";
import teamBg from "../assets/backgrounds/team.jpg";


export default function Team() {
  return (
    <main className="bg-[#03010a] text-white">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero

        backgroundImage={teamBg}

        label="UNITED BY MUSIC"

        title={
          <>
            <span className="text-[0.8em]">
              THE PEOPLE
            </span>

            <br />

            <span className="text-[0.8em]">
              BEHIND THE
            </span>

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
              <span className="text-[0.8em]">
                VIBES.
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
      {/* TEAM SECTION */}
      <MeetTheTeam />

      {/* FOOTER */}
      <Footer />
    </main>
  );}