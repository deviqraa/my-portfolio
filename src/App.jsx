
import { Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function PageRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div key={location.pathname} className="page-enter">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-linear-to-br from-slate-950 via-indigo-950 to-purple-950">
      <div className="glow-one pointer-events-none fixed -left-32 top-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-[100px]" />

      <div className="glow-two pointer-events-none fixed -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative">
        <Navbar />

        <main>
          <PageRoutes />
        </main>

        <Footer />
      </div>
    </div>
  );
}
