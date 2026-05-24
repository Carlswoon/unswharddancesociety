// AboutSection.jsx

import {
  Users,
  AudioWaveform,
  Heart,
  Zap,
  Calendar,
  Globe,
} from "lucide-react";

import crowdImage from "../assets/backgrounds/team.jpg";

const missionCards = [
  {
    icon: <Users size={42} />,
    title: "Community",
    description:
      "Bringing students together through a shared love for harder dance music.",
  },

  {
    icon: <AudioWaveform size={42} />,
    title: "Experience",
    description:
      "High production events that deliver unforgettable moments.",
  },

  {
    icon: <Heart size={42} />,
    title: "Inclusivity",
    description:
      "A safe and welcoming space for everyone, no matter who you are.",
  },

  {
    icon: <Zap size={42} />,
    title: "Passion",
    description:
      "Run by students who are passionate about the music and the scene.",
  },
];

export default function AboutSection() {
  return (
    <section className="px-6 py-28 bg-[#03010a] text-white">

      <div className="class=relative z-10 max-w-[1800px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-16">

        {/* TOP SECTION */}
        <div
          className="
            grid
            gap-14
            lg:grid-cols-2
            items-start
          "
        >

          {/* LEFT */}
          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-fuchsia-500
              "
            >
              Our Mission
            </p>

            <h2
              className="
                mt-5
                text-5xl
                md:text-6xl
                font-black
                uppercase
                leading-[0.9]
                tracking-[-0.04em]
              "
            >
              UNITED BY MUSIC.
              <br />

              DRIVEN BY{" "}

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
                PASSION.
              </span>

            </h2>

          </div>

          {/* RIGHT */}
          <div>

            <p
              className="
                text-lg
                leading-[2]
                text-white/60
                max-w-[680px]
              "
            >
              Our mission is to promote and celebrate
              the harder styles of dance music on
              campus. We aim to create safe,
              inclusive and high-energy spaces where
              ravers can connect, express and belong.
            </p>

          </div>

        </div>

        {/* MISSION CARDS */}
        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-4
          "
        >

          {missionCards.map((card) => (

            <div
              key={card.title}

              className="
                group
                relative
                overflow-hidden

                rounded-2xl
                border
                border-fuchsia-500/20

                bg-[#07020f]

                p-10

                transition-all
                duration-300

                hover:-translate-y-2
                hover:border-fuchsia-400
                hover:shadow-[0_0_40px_rgba(217,70,239,0.18)]
              "
            >

              {/* GLOW */}
              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-br
                  from-fuchsia-500/5
                  to-transparent

                  opacity-0
                  group-hover:opacity-100

                  transition-opacity
                "
              />

              {/* ICON */}
              <div className="relative z-10 text-fuchsia-400">

                {card.icon}

              </div>

              {/* TITLE */}
              <h3
                className="
                  relative z-10

                  mt-8

                  text-2xl
                  font-bold
                  uppercase
                  tracking-wide
                "
              >
                {card.title}
              </h3>

              {/* DESCRIPTION */}
              <p
                className="
                  relative z-10

                  mt-5

                  text-white/60
                  leading-8
                "
              >
                {card.description}
              </p>

            </div>

          ))}

        </div>

        {/* BOTTOM STORY SECTION */}
        <div
          className="
            mt-24
            grid
            gap-14
            lg:grid-cols-2
            items-center
          "
        >

          {/* IMAGE */}
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-fuchsia-500/20
            "
          >

            <img
              src={crowdImage}
              alt="Hard Dance Society crowd"
              className="
                h-full
                w-full
                object-cover
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#05010b]
                via-transparent
                to-transparent
              "
            />

          </div>

          {/* STORY CONTENT */}
          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-fuchsia-500
              "
            >
              Our Story
            </p>

            <h2
              className="
                mt-5

                text-5xl
                md:text-6xl

                font-black
                uppercase

                leading-[0.9]
                tracking-[-0.04em]
              "
            >
              BUILT BY RAVERS,
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
                FOR RAVERS.
              </span>

            </h2>

            <div
              className="
                mt-8
                space-y-7

                text-white/60
                leading-[2]
                text-lg
              "
            >

              <p>
                Hard Dance Society UNSW was founded
                by a group of students who wanted
                more than just another uni club. We
                wanted a movement. A place where the
                harder styles are represented,
                respected and celebrated.
              </p>

              <p>
                From our first event to now, we
                continue to grow, push boundaries and
                bring the hardest energy to UNSW.
              </p>

            </div>

            {/* STATS */}
            <div
              className="
                mt-12

                grid
                grid-cols-3

                gap-8
              "
            >

              {/* STAT */}
              <div>

                <Calendar
                  size={32}
                  className="text-fuchsia-400"
                />

                <h3
                  className="
                    mt-4

                    text-5xl
                    font-black
                    text-fuchsia-400
                  "
                >
                  20+
                </h3>

                <p
                  className="
                    mt-2
                    uppercase
                    tracking-[0.15em]
                    text-white/50
                    text-sm
                  "
                >
                  Events
                  <br />
                  Per Year
                </p>

              </div>

              {/* STAT */}
              <div>

                <Users
                  size={32}
                  className="text-fuchsia-400"
                />

                <h3
                  className="
                    mt-4

                    text-5xl
                    font-black
                    text-fuchsia-400
                  "
                >
                  2000+
                </h3>

                <p
                  className="
                    mt-2
                    uppercase
                    tracking-[0.15em]
                    text-white/50
                    text-sm
                  "
                >
                  Ravers
                  <br />
                  And Growing
                </p>

              </div>

              {/* STAT */}
              <div>

                <Globe
                  size={32}
                  className="text-fuchsia-400"
                />

                <h3
                  className="
                    mt-4

                    text-5xl
                    font-black
                    text-fuchsia-400
                  "
                >
                  1
                </h3>

                <p
                  className="
                    mt-2
                    uppercase
                    tracking-[0.15em]
                    text-white/50
                    text-sm
                  "
                >
                  Community
                  <br />
                  United
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}