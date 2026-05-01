import Link from "next/link";

const posts = [
  {
    title: "How I design cleaner landing pages",
    excerpt: "A practical breakdown of layout, spacing, hierarchy, and the small details that make a website feel polished.",
    category: "Design",
    readTime: "5 min read",
  },
  {
    title: "Why I like Next.js for portfolio websites",
    excerpt: "A simple look at what makes Next.js effective for fast, structured personal websites and project pages.",
    category: "Development",
    readTime: "4 min read",
  },
  {
    title: "Turning rough ideas into finished UI sections",
    excerpt: "A quick process for moving from vague ideas to complete sections with stronger rhythm and cleaner presentation.",
    category: "Process",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-emerald-400/14 bg-[rgba(3,10,18,0.78)] px-6 py-8 shadow-[0_24px_70px_rgba(2,6,23,0.42)] sm:px-8 lg:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald-200/70">
          Blog
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="text-4xl text-white sm:text-5xl">
              Writing about design decisions, frontend work, and cleaner UI thinking.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              This page is now structured like a real blog landing page, with a
              featured intro area and a list of article cards you can later
              connect to actual posts.
            </p>
          </div>

          <div className="rounded-[1.6rem] border border-emerald-400/14 bg-emerald-400/8 p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-200/70">
              Featured note
            </p>
            <h2 className="mt-4 text-2xl text-white">
              Clear writing helps explain the work behind the screen.
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Use this space for one featured article, an intro to your process,
              or a short note about what you are currently exploring.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-[1.6rem] border border-emerald-400/12 bg-[rgba(3,10,18,0.74)] p-6 shadow-[0_18px_48px_rgba(2,6,23,0.38)]"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-emerald-400/14 bg-emerald-400/8 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-200/80">
                {post.category}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                {post.readTime}
              </span>
            </div>
            <h2 className="mt-4 text-2xl text-white">
              {post.title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {post.excerpt}
            </p>
            <Link
              href="/blog"
              className="mt-5 inline-flex font-mono text-[11px] uppercase tracking-[0.24em] text-emerald-200 transition hover:text-emerald-100"
            >
              Read article
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
