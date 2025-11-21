import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -inset-[20%] bg-[radial-gradient(60%_50%_at_20%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(40%_40%_at_80%_30%,rgba(99,102,241,0.18),transparent),radial-gradient(50%_60%_at_50%_90%,rgba(34,211,238,0.12),transparent)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 mt-10 bg-slate-950/50">
        <div className="max-w-6xl mx-auto px-6 text-center text-slate-400">
          © {new Date().getFullYear()} Wildan Abiarsa • Dibuat dengan cinta dan teknologi
        </div>
      </footer>
    </div>
  );
}

export default App;
