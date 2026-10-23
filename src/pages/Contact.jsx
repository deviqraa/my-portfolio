
const email = "iqramanzoor2327@gmail.om";
const githubUrl = "https://github.com/deviqraa";

export default function Contact() {
  return (
    <section className="page-enter mx-auto min-h-[70vh] max-w-6xl px-6 py-24">
      <div className="glass-card rounded-3xl border border-white/15 bg-white/8 p-8 backdrop-blur-xl md:p-12">
        <p className="text-cyan-300">LET'S CONNECT</p>

        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          Contact Me
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-slate-300">
          I am always interested in learning, connecting with
          others and exploring opportunities to grow as a developer.
          Feel free to reach out.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={`mailto:${email}`}
            className="rounded-xl bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-indigo-400"
          >
            Send Me an Email →
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-300"
          >
            GitHub Profile ↗
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/30 p-5">
          <p className="text-sm text-slate-400">EMAIL ADDRESS</p>
          <a
            href={`mailto:${email}`}
            className="mt-2 inline-block break-all text-cyan-300 hover:text-cyan-200"
          >
            {email}
          </a>
        </div>
      </div>
    </section>
  );
}
