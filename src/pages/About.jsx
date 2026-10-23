
export default function About() {
  return (
    <section className="page-enter mx-auto min-h-[70vh] max-w-6xl px-6 py-24">
      <div className="glass-card rounded-3xl border border-white/15 bg-white/8p-8 backdrop-blur-xl md:p-12">
        <p className="text-cyan-300">GET TO KNOW ME</p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          About Me
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-slate-300">
          Hi, I am Iqra Manzoor, a student and aspiring frontend
          developer. I am currently pursuing my graduation,
          expected to complete in 2027.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          I am learning programming, web development and modern
          technologies by exploring new concepts and creating
          small applications. My interests also include AI tools,
          software engineering, cybersecurity fundamentals and
          blockchain technology.
        </p>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          Alongside my technical learning, I have teaching
          experience that has helped me develop communication
          and explanation skills. I am excited to keep learning,
          improve my practical abilities and work on meaningful projects.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
            <p className="text-sm text-cyan-300">EDUCATION</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Graduation
            </h2>
            <p className="mt-2 text-slate-300">2023 – 2027</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
            <p className="text-sm text-cyan-300">CURRENT FOCUS</p>
            <h2 className="mt-2 text-xl font-semibold text-white">
              Learning & Building
            </h2>
            <p className="mt-2 text-slate-300">
              Frontend development and programming
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
