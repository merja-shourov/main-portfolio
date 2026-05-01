const projects = [
  {
    title: "Portfolio system",
    tag: "Personal brand",
    body: "A clean personal website focused on strong presentation, responsive sections, and lightweight performance.",
  },
  {
    title: "Product landing page",
    tag: "Marketing UI",
    body: "A conversion-focused landing page with clear messaging, modular sections, and polished visual hierarchy.",
  },
  {
    title: "Dashboard interface",
    tag: "App design",
    body: "A structured admin-style UI with reusable cards, data blocks, and readable layouts for day-to-day use.",
  },
];

export default function Projects() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-emerald-400/14 bg-[rgba(3,10,18,0.78)] px-6 py-8 shadow-[0_24px_70px_rgba(2,6,23,0.42)] sm:px-8 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200/70">
          Projects
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl text-white sm:text-5xl">
          Selected work focused on clean interfaces and practical frontend builds.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          These project blocks are structured to showcase the kind of websites
          and UI work you can expand later with real screenshots, links, and case
          studies.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-[1.6rem] border border-emerald-400/12 bg-[rgba(3,10,18,0.74)] p-6 shadow-[0_18px_48px_rgba(2,6,23,0.38)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-200/70">
              {project.tag}
            </p>
            <h2 className="mt-4 text-2xl text-white">
              {project.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {project.body}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
