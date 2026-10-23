
import { Link } from "react-router";

export default function Home() {
  return (
    <section
      id="home"
      className="page-enter mx-auto grid min-h-[80vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2"
    >
      <div>
        <p className="mb-5 font-medium tracking-[0.2em] text-cyan-300">
          HELLO, I'M IQRA MANZOOR
        </p>

        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
          Student &
          <span className="block text-indigo-300">
            Frontend Developer.
          </span>
        </h1>

        <p className="mt-6 max-w-lg leading-7 text-slate-300">
          I am a passionate student exploring frontend development,
          programming and emerging technologies. I enjoy learning
          new skills and turning ideas into useful digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-indigo-400"
          >
            Explore My Work →
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300"
          >
            Contact Me
          </Link>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Currently learning, building and growing every day.
        </p>
      </div>

      <div className="glass-card rounded-3xl border border-white/15 bg-white/8 p-6 shadow-2xl backdrop-blur-2xl md:p-10">
        <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-8">
          <div className="mb-6 h-1.5 w-16 rounded-full bg-cyan-400" />

          <p className="text-sm text-indigo-300">
            MY LEARNING JOURNEY
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            Curious mind. Creative ideas.
          </h2>

          <p className="mt-4 leading-7 text-slate-300">
            From programming fundamentals to web development,
            AI tools and cybersecurity basics, I am continuously
            building my knowledge through learning and practice.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {["C++", "Python", "React", "Flutter", "AI Tools"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
