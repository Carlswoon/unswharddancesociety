import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Events from "../components/Events.jsx"
function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero / >

      <Events />
    </main>
  );
}

export default Home;