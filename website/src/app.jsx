import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Events from "./components/Events";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Events />
    </div>
  );
}

export default App;