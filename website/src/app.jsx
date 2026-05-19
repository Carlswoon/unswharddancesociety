function App() {
  return (
    <div className="min-h-screen text-white">
      
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <h1 className="text-2xl font-bold tracking-widest">
            HARD<span className="text-cyan-400">DANCE</span>
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#" className="hover:text-cyan-400 transition">
              Home
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Events
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#" className="hover:text-cyan-400 transition">
              Team
            </a>
          </div>

          <button className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
            Join Us
          </button>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-cyan-400/20 blur-[120px] rounded-full" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          
          <p className="uppercase tracking-[0.4em] text-cyan-400 text-sm mb-4">
            UNSW HARD DANCE SOCIETY
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            HARDER.
            <br />
            TOGETHER.
            <br />
            FOREVER.
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            A community for ravers, dancers, and hard dance lovers at UNSW.
            Events, socials, workshops, festivals, and unforgettable nights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition">
              Explore Events
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:border-cyan-400 hover:text-cyan-400 transition">
              Meet The Team
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}

export default App;