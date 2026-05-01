import Link from "next/link";

export default function Home() {
  return (
    <nav className="flex items-center justify-between bg-zinc-50 font-sans dark:bg-black">
        <ul className="nav flex justify-left gap-2 py-2">
            <li>
                <Link href={"/"} >home</Link>
            </li>
            <li>
                <Link href={"/about"} >About</Link>
            </li>
            <li>
                <Link href={"/project"} >Project</Link>
            </li>
            <li>
                <Link href={"/article"} >Article</Link>
            </li>
        </ul>
        <ul className="social-links">
            <li>Facebook</li>
            <li>Linkedin</li>
            <li>Github</li>
        </ul>
    </nav>
  );
}
