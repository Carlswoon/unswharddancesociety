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
      <div className="relative z-10 min-h-screen w-full px-6 sm:px-10 md:px-16">

        {/* HERO CONTENT */}
        <div
          className="
            min-h-screen
            flex
            flex-col
            justify-center
            items-start
            max-w-[720px]
            gap-6
          "
        >

          {/* SUBTITLE */}
          <p
            className="
              text-[#d946ef]
              uppercase
              tracking-[0.28em]
              text-[0.7rem]
              sm:text-[0.8rem]
              md:text-sm
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
              leading-[0.9]
              tracking-[-0.04em]
              text-white

              text-[clamp(3rem,14vw,7rem)]
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
              max-w-[540px]

              text-white/65
              leading-relaxed

              text-[0.95rem]
              sm:text-[1rem]
              md:text-[1.1rem]
            "
          >
            The home of Hard Dance at UNSW.
            Bringing the community together
            through our passion for harder styles.
          </p>

          {/* BUTTONS */}
          <div className="pt-6 sm:pt-8 md:pt-10">
            <button className="rave-button">
              Join Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;