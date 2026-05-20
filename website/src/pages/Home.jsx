import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "../components/Events"
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