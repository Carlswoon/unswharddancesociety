import heroBg from "../assets/backgrounds/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-105
        "
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* PURPLE RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_65%)]" />

      {/* TOP FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#05010b]/70 via-transparent to-[#05010b]" />

      {/* GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* BOTTOM BORDER */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#9333ea]/50 to-transparent z-20" />

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen">

        <div className="
          max-w-[1800px]
          mx-auto

          min-h-screen

          px-5
          sm:px-8
          md:px-12
          lg:px-16

          pt-28
          sm:pt-32
          md:pt-36

          pb-20

          flex
          items-center
        ">

          <div
            className="
              w-full
              max-w-[820px]

              flex
              flex-col

              items-start
            "
          >

            {/* LABEL */}
            <p
              className="
                text-[#d946ef]
                uppercase
                tracking-[0.35em]

                text-[0.68rem]
                sm:text-xs
                md:text-sm

                mb-5
                font-medium
              "
            >
              UNITED BY MUSIC
            </p>

            {/* TITLE */}
            <h1
              className="
                font-black
                uppercase
                leading-[0.88]
                tracking-[-0.06em]

                text-white

                text-[3.5rem]
                sm:text-[5rem]
                md:text-[6.5rem]
                lg:text-[7.5rem]
                xl:text-[8.5rem]

                mb-8
              "
            >

              HARDER.

              <br />

              TOGETHER.

              <br />

              <span className="
                bg-gradient-to-r
                from-[#f0abfc]
                via-[#d946ef]
                to-[#9333ea]
                bg-clip-text
                text-transparent
              ">

                FOREVER.

              </span>

            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-[620px]

                text-white/65

                leading-[1.9]

                text-[1rem]
                sm:text-[1.08rem]
                md:text-[1.2rem]
                lg:text-[1.3rem]

                mb-12
              "
            >

              The home of Hard Dance at
              UNSW. Bringing the community
              together through our passion
              for harder styles.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap items-center gap-5">

              {/* PRIMARY */}
              <button
                className="
                  group
                  relative
                  overflow-hidden

                  bg-gradient-to-b
                  from-[#d946ef]
                  to-[#9333ea]

                  hover:brightness-110

                  transition-all

                  px-8 py-4
                  sm:px-10 sm:py-5

                  rounded-[1.2rem]

                  inline-flex
                  items-center
                  gap-5

                  shadow-[0_0_50px_rgba(168,85,247,0.45)]
                "
              >

                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="
                  relative z-10
                  font-semibold
                  tracking-wide

                  text-base
                  sm:text-lg
                ">

                  JOIN US

                </span>

                <span className="relative z-10 text-2xl group-hover:translate-x-1 transition-transform">

                  →

                </span>

              </button>

              {/* SECONDARY */}
              <button
                className="
                  group
                  relative
                  overflow-hidden

                  border
                  border-[#9333ea]

                  hover:border-[#c084fc]

                  transition-all

                  px-8 py-4
                  sm:px-10 sm:py-5

                  rounded-[1.2rem]

                  inline-flex
                  items-center
                  gap-5
                "
              >

                <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <span className="
                  relative z-10
                  font-semibold
                  tracking-wide

                  text-base
                  sm:text-lg
                ">

                  EXPLORE EVENTS

                </span>

                <span className="relative z-10 text-2xl group-hover:translate-x-1 transition-transform">

                  →

                </span>

              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;