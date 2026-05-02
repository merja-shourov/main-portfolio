import Image from "next/image";
import Link from "next/link";
import profile from "@/public/merjaShourov.png";

const highlights = [
  { label: "Experience", value: "Frontend-led product builds" },
  { label: "Stack", value: "Next.js, React, Node.js" },
  { label: "Focus", value: "Clean UI with hacker energy" },
];

const services = [
  {
    title: "Product UI design",
    body: "Design systems, landing pages, dashboards, and modern interfaces with clear hierarchy and polished visuals.",
  },
  {
    title: "Frontend development",
    body: "Responsive, accessible websites built with Next.js and React, focused on smooth performance and maintainable code.",
  },
  {
    title: "Launch support",
    body: "From planning to shipping, I help shape the content, structure, and interactions that make a site feel complete.",
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-[2rem] border border-emerald-400/16 bg-[rgba(3,10,18,0.84)] shadow-[0_24px_90px_rgba(2,6,23,0.5)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_28%)]" />
        <div className="relative grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.92fr] lg:px-12 lg:py-14">
          <div className="space-y-8">
            <span className="inline-flex rounded-full border border-emerald-400/18 bg-emerald-400/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200">
              root@portfolio: full stack web developer
            </span>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-emerald-300  [text-shadow:0_0_24px_rgba(45,212,191,0.32)]   sm:text-5xl lg:text-7xl">
                 Next.js Developer 
                <span className="block   text-white text-4xl">
                 Building High-Performance, Scalable Web Applications.
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Building the next generation of the web with Next.js. Dedicated to clean code, modular styling with Sass, and creating interfaces that feel as fast as they look.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-800 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                Resume
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-full border border-emerald-400/18 bg-white/4 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/30 hover:bg-emerald-400/8"
              >
                View Projects
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.4rem] border border-emerald-400/12 bg-black/18 p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-200/70">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[1.8rem] border border-emerald-400/16 bg-[rgba(7,18,30,0.86)] p-4">
              <div className="mb-4 flex items-center justify-between rounded-[1rem] border border-emerald-400/12 bg-black/18 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                  identity.card
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] bg-white/2">
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-emerald-300/20 to-transparent" />
                <Image
                  className="relative aspect-[4/5] w-full object-cover"
                  src={profile}
                  alt="Portrait of Merja Shourov"
                  priority
                  placeholder="blur"
                />
              </div>

              {/* <div className="mt-4 rounded-[1.25rem] border border-emerald-400/12 bg-black/18 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200/70">
                  developer.log
                </p>
                <p className="mt-3 text-lg font-semibold text-white">Merja Shourov</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Frontend-focused developer building portfolio sites, product
                  pages, and clean user interfaces with modern web tools.
                </p>
              </div> */}

            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[1.6rem] border border-emerald-400/12 bg-[rgba(3,10,18,0.76)] p-6 shadow-[0_18px_48px_rgba(2,6,23,0.38)]"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-200/70">
              service.module
            </p>
            <h2 className="mt-4 text-2xl text-white">
              {service.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {service.body}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
