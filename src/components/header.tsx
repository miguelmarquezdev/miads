
import Link from "next/link";

export function Header() {
  return (
    <header className="max-w-screen-lg mx-auto py-5 bg-neutral-100">
      <div className="flex justify-between  content-center">
        <div className="font-bold text-2xl">
          <Link href={'/'}>MIADS.</Link>
        </div>

        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href={'/'}>Inicio</Link>
            </li>
            <li>
              <Link href={'/posts'}>Diseño Web</Link>
            </li>
            <li>
              <Link href={'/seo'}>SEO</Link>
            </li>
            <li>
              <Link href={'/contact'}>Publicidad</Link>
            </li>
            <li>
              <Link href={'/contact'}>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
