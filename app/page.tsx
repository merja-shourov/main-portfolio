import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import profile from "@/public/merjaShourov.png";
// import { useEffect, useState } from "react";

const highlights = [
  { label: "Experience", value: "Frontend-led product builds" },
  { label: "Stack", value: "Next.js, React, Node.js" },
  { label: "Focus", value: "Clean UI " },
];

export const metadata: Metadata = {
  title: "Next.js Developer in Dhaka | Next.js & Node.js Specialist – merjaShourov",
  description:
    "This is Merja Shourov a Full Stack Web Developer specializing in Next.js, React, and scalable web apps. Check my projects, skills, and contact me for freelance work.",
};


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
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_28%)]" /> */}

        <div className="relative grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.2fr_0.92fr] lg:px-12 lg:py-14">
        
          {/* left sidebar */}
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
                About Me
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
          

          {/* right sidebar */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-[0.8rem] border border-emerald-400/16 
                  bg-[rgba(7,18,30,0.86)] p-4">

              {/* header */}
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-slate-400">
                  identity.card
                </span>
              </div>

              {/* image with overlay */}
              <div className="relative overflow-hidden rounded-[.8rem]">
                <Image
                  className="aspect-[4/5] w-full object-cover"
                  src={profile}
                  alt="Portrait of Merja Shourov"
                  priority
                  placeholder="blur"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* floating content */}
                <div className="absolute bottom-0 w-full p-5">

                  <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-200/70">
                    developer.log
                  </p>

                  {/* name + verified */}
                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-xl font-semibold text-white">
                      Merja Shourov
                    </p>

                    {/* Skype-style verified badge */}
                    <span className="flex items-center justify-center h-5 w-5 rounded-full 
                           bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)] 
                           ring-2 ring-black/40">
                      <svg
                        className="h-3 w-3 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                  </div>

                  {/* bio */}
                  <p className="mt-1 text-sm text-slate-300 leading-6">
                    Frontend developer crafting clean UI & modern web experiences.
                  </p>

                  {/* social icons with tooltips */}
                  <div className="mt-2 flex items-center gap-4">

                    {/* GitHub */}
                    <div className="relative group">
                      <a
                        href="https://github.com/merja-shourov"
                        target="_blank"
                        className="p-2 rounded-full text-slate-400 hover:text-white  transition"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.9 3.2 9 7.6 10.5.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.8 1.9 1.2.9 1.6 2.3 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.5-.3-5.2-1.3-5.2-5.7 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1a10.4 10.4 0 015.4 0c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.4-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6a11.1 11.1 0 007.6-10.5C23.1 5.3 18.3.5 12 .5z" />
                        </svg>
                      </a>

                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 
                             whitespace-nowrap rounded-md border border-emerald-400/10 
                             bg-black/80 px-2 py-1 text-[10px] font-mono 
                             text-emerald-200 opacity-0 translate-y-1 
                             group-hover:opacity-100 group-hover:translate-y-0 
                             transition-all duration-200">
                        GitHub
                        <span className="absolute top-full left-1/2 -translate-x-1/2 
                               border-4 border-transparent border-t-black/80"></span>
                      </span>
                    </div>

                    {/* LinkedIn */}
                    <div className="relative group">
                      <a
                        href="https://linkedin.com/in/merjaShourov"
                        target="_blank"
                        className="p-2 rounded-full text-slate-400 hover:text-blue-400 hover:bg-white/1 transition"
                      >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6 1.1 6 0 4.88 0 3.5 0 2.12 1.1 1 2.48 1 3.86 1 4.98 2.12 4.98 3.5zM.5 8h4v14h-4V8zm7.5 0h3.8v2h.1c.5-1 1.9-2 3.9-2 4.2 0 5 2.7 5 6.2V22h-4v-6.8c0-1.6 0-3.7-2.3-3.7s-2.6 1.8-2.6 3.6V22h-4V8z" />
                        </svg>
                      </a>

                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 
                             whitespace-nowrap rounded-md border border-emerald-400/10 
                             bg-black/80 px-2 py-1 text-[10px] font-mono 
                             text-emerald-200 opacity-0 translate-y-1 
                             group-hover:opacity-100 group-hover:translate-y-0 
                             transition-all duration-200">
                        LinkedIn
                        <span className="absolute top-full left-1/2 -translate-x-1/2 
                               border-4 border-transparent border-t-black/80"></span>
                      </span>
                    </div>
                    
                    {/* codeforces */}
                    <div className="relative group">
                      <a
                        href="https://codeforces.com/profile/merja_shourov"
                        target="_blank"
                        className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/1 transition"
                      >
                        {/* simple CF-style bars */}
                        <svg className="h-5 w-5" viewBox="0 0 24 24">
                          <rect x="3" y="10" width="4" height="8" fill="currentColor" />
                          <rect x="10" y="6" width="4" height="12" fill="currentColor" />
                          <rect x="17" y="3" width="4" height="15" fill="currentColor" />
                        </svg>
                      </a>

                      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 
                   whitespace-nowrap rounded-md border border-emerald-400/10 
                   bg-black/80 px-2 py-1 text-[10px] font-mono 
                   text-emerald-200 opacity-0 translate-y-1 
                   group-hover:opacity-100 group-hover:translate-y-0 
                   transition-all duration-200">
                        Codeforces
                        <span className="absolute top-full left-1/2 -translate-x-1/2 
                     border-4 border-transparent border-t-black/80"></span>
                      </span>
                    </div>
                  </div>

                </div>
              </div>
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
