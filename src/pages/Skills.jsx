
const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "C#"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "JavaScript", "Frontend Development"],
  },
  {
    title: "Other Technologies",
    skills: [
      "Flutter",
      "AI Tools",
      "Software Engineering Basics",
      "Cybersecurity Basics",
      "Blockchain Fundamentals",
    ],
  },
];

export default function Skills() {
  return (
    <section className="page-enter mx-auto min-h-[70vh] max-w-6xl px-6 py-24">
      <p className="text-cyan-300">WHAT I AM LEARNING</p>

      <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
        My Skills
      </h1>

      <p className="mt-5 max-w-2xl leading-7 text-slate-300">
        These are the technologies and areas I have been exploring
        as I continue to strengthen my technical knowledge.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="glass-card rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-xl"
          >
            <h2 className="text-xl font-bold text-white">
              {group.title}
            </h2>

            <div className="mt-5 flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/15 bg-slate-950/30 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-slate-400">
        I am continuously improving these skills through learning
        and hands-on practice.
      </p>
    </section>
  );
}
