import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Events from "../components/Events.jsx"
import Footer from "../components/Footer.jsx";
import About from "./About.jsx";
function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero / >

      <Events />

      <About />
      
      <Footer />
    </main>
  );
}

export default Home;