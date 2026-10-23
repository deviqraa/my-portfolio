
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio with a glassmorphism design.",
    tech: "React • Tailwind CSS",
  },
  {
    title: "Landing Page",
    description: "A responsive landing page with a clean user interface.",
    tech: "HTML • CSS • JavaScript",
  },
  {
    title: "Web Application",
    description: "A simple web experience focused on usability and design.",
    tech: "React • JavaScript",
  },
];

export default function Projects() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-6xl px-6 py-24">
      <p className="text-cyan-300">SOME THINGS I HAVE BUILT</p>

      <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        My Projects
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-indigo-300/50"
          >
            <h2 className="text-xl font-bold text-white">
              {project.title}
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              {project.description}
            </p>

            <p className="mt-6 text-sm text-cyan-300">
              {project.tech}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
