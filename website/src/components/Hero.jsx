import heroBg from "../assets/backgrounds/hero.png";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* PURPLE GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.15),transparent_65%)]" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 h-screen w-full">

        {/* HERO CONTENT */}
        <div
          className="
            h-full
            flex
            flex-col
            justify-center
            items-start

            max-w-[720px]
            pl-[12vw]
            pt-[6vh]
            translate-x-[5vw]
          "
        >

          {/* SUBTITLE */}
          <p
            className="
              text-[#d946ef]
              uppercase
              tracking-[0.35em]
              text-[0.8rem]
              md:text-sm
              mb-6
              font-medium
            "
          >
            UNITED BY MUSIC
          </p>

          {/* HEADING */}
          <h1
            className="
              font-black
              uppercase
              leading-[0.88]
              tracking-[-0.06em]

              text-white

              text-[clamp(3.8rem,6vw,7rem)]
            "
          >
            HARDER.
            <br />
            TOGETHER.
            <br />

            <span className="text-[#9333ea]">
              FOREVER.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-8
              max-w-[540px]

              text-white/65
              leading-relaxed

              text-[1rem]
              md:text-[1.1rem]
            "
          >
            The home of Hard Dance at UNSW.
            Bringing the community together
            through our passion for harder styles.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-5 mt-10">

            <button
              className="
                h-[58px]
                px-8

                rounded-full

                bg-[#7c3aed]
                hover:bg-[#8b5cf6]

                transition-all

                text-white
                font-semibold

                shadow-[0_0_35px_rgba(124,58,237,0.45)]
              "
            >
              Upcoming Events
            </button>

            <button
              className="
                h-[58px]
                px-8

                rounded-full

                border
                border-purple-500/40

                bg-black/20
                backdrop-blur-sm

                hover:border-purple-400
                hover:bg-purple-500/10

                transition-all

                text-white
                font-semibold
              "
            >
              Join The Society
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;