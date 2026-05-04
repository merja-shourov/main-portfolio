import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Next.js Developer in Dhaka | Next.js & Node.js Specialist – merjaShourov",
  description:
    "This is Merja Shourov a Full Stack Web Developer specializing in Next.js, React, and scalable web apps. Check my projects, skills, and contact me for freelance work.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];


const statusChips = ["Remote Friendly", "Active"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${syne.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-10 sm:px-6 lg:px-8">

          <header className="sticky top-0 z-20 pt-4">
            <nav className="overflow-hidden rounded-[1.9rem] border border-emerald-400/18 bg-[rgba(3,10,18,0.82)] shadow-[0_22px_80px_rgba(2,6,23,0.48)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-emerald-400/12 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-emerald-100/45">
                  portfolio.system
                </p>
              </div>

              <div className="flex flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-3">
                    <Link
                      href="/"
                      className="font-[family:var(--font-display)] text-2xl tracking-tight text-white"
                    >
                      Merja<span className="text-emerald-300">Shourov</span>
                    </Link>
                    <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-200 lg:hidden">
                      system online
                    </span>
                  </div>

                  {/* <div className="flex flex-wrap gap-2">
                    {systemChips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/8 bg-white/4 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-300"
                      >
                        {chip}
                      </span>
                    ))}
                  </div> */}
                  
                </div>

                <div className="flex flex-col gap-4 lg:items-end">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
                    <ul className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-300">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block rounded-full border border-transparent px-3 py-2 transition hover:border-emerald-400/20 hover:bg-emerald-400/8 hover:text-white"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* <div className="hidden items-center gap-2 lg:flex">
                      {statusChips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full border border-emerald-400/16 bg-emerald-400/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-200"
                        >
                          {chip}
                        </span>
                      ))}
                    </div> */}
                    <div className="hidden items-center gap-3 lg:flex">
                        
                          <span
                          
                            className="group relative flex items-center gap-2 overflow-hidden rounded-full 
                                      border border-emerald-400/20 bg-emerald-400/10 
                                      px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.24em] 
                                      text-emerald-200 transition-all duration-300
                                      
                                      hover:-translate-y-[2px] hover:bg-emerald-400/20 
                                      hover:shadow-[0_0_12px_rgba(52,211,153,0.35)]"
                          >
                            {/* glowing pulse dot */}
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                            </span>

                            

                            Active

                            {/* animated shine */}
                            <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100">
                              <span className="absolute -left-1/2 top-0 h-full w-1/2 
                                              bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                              skew-x-12 animate-[shine_1.2s_linear]"></span>
                            </span>
                          </span>
                        
                      </div>  
                  </div>

                  {/* <div className="flex flex-wrap gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-500">
                    <span>Dhaka, Bangladesh</span>
                    <span>| Remote friendly</span>
                  </div> */}
                </div>
              </div>
            </nav>
          </header>

          <main className="flex-1 pt-6">{children}</main>

          <footer className="mt-8 border-t border-emerald-400/12 py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-7 text-slate-400">
                Building clean, high-contrast web experiences with modern
                frontend tools and a strong eye for visual systems.
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-200/70">
                &copy; {new Date().getFullYear()} merja_shourov. All rights reserved.
              </p>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
