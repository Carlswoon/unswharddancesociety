import heroBg from "../assets/backgrounds/hero.png";

function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Purple Glow */}
      <div className="absolute inset-0 bg-purple-500/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        
        <div className="max-w-xl">
          
          <p className="text-pink-500 tracking-[0.3em] uppercase text-sm mb-6">
            United By Music
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
            HARDER.
            <br />
            TOGETHER.
            <br />
            <span className="text-purple-500">
              FOREVER.
            </span>
          </h1>

          <p className="text-white/70 mb-8 text-lg">
            The home of Hard Dance at UNSW.
            Bringing the community together through
            our passion for harder styles.
          </p>

          <div className="flex gap-4">
            
            <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition">
              Upcoming Events
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:border-purple-500 transition">
              Join The Society
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;