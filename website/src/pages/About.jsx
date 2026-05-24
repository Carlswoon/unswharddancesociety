import Navbar from "../components/Navbar.jsx";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="flex items-center justify-center h-screen">
        <h1 className="text-5xl font-bold tracking-widest">
          HI THIS IS THE ABOUT PAGE
        </h1>
      </div>
    </main>
  );
}