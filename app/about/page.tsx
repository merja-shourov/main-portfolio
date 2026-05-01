const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "UI Design",
];

const principles = [
  {
    title: "Clarity first",
    body: "I like interfaces that explain themselves quickly and help users move without friction.",
  },
  {
    title: "Clean execution",
    body: "Strong spacing, readable type, and consistent components make a site feel professional immediately.",
  },
  {
    title: "Performance matters",
    body: "Fast loading and responsive layouts are part of the design, not something added later.",
  },
];

export default function About() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-emerald-400/14 bg-[rgba(3,10,18,0.78)] px-6 py-8 shadow-[0_24px_70px_rgba(2,6,23,0.42)] sm:px-8 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200/70">
          About me
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.85fr]">
          <div>
            <h1 className="text-4xl text-white sm:text-5xl">
              I build websites that balance clean design with practical frontend systems.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              My work sits between design and engineering. I enjoy turning ideas
              into clear page structures, strong visual systems, and reliable
              frontend code that feels smooth on every screen size.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Whether the project is a portfolio, product page, or company
              website, I focus on making the experience look refined, load fast,
              and stay easy to maintain.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-emerald-400/12 bg-black/18 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-200/70">
              Core skills
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-emerald-400/14 bg-emerald-400/8 px-3 py-2 text-sm font-medium text-slate-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {principles.map((item) => (
          <article
            key={item.title}
            className="rounded-[1.5rem] border border-emerald-400/12 bg-[rgba(3,10,18,0.74)] p-6"
          >
            <h2 className="text-2xl text-white">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.body}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
