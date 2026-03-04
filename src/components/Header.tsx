import { Link } from '@tanstack/react-router'
import { FaInstagram } from 'react-icons/fa'
import { BsTwitterX } from 'react-icons/bs'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1.5 text-sm text-(--sea-ink) no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
            JagoJalan Nusantara
          </Link>
        </h2>

        <div className="ml-auto flex items-center gap-1.5 sm:ml-0 sm:gap-2">
          <a
            href="https://x.com/tan_stack"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink) sm:block"
          >
            <span className="sr-only">Follow TanStack on X</span>
            <BsTwitterX size={26} />
          </a>
          <a
            href="https://github.com/TanStack"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink) sm:block"
          >
            <span className="sr-only">Go to Jagojalan Official Instagram</span>
            <FaInstagram size={28} />
          </a>

          <ThemeToggle />
        </div>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
          {[
            ['Home', '/'],
            ['Location', '/location'],
            ['Work', '/work'],
            ['Paket', '/paket'],
            ['Blog', '/blog'],
            ['About', '/about'],
            ['Contact', '/contact'],
          ].map(([title, href], index) => (
            <Link
              key={index}
              to={href}
              className="nav-link"
              activeProps={{ className: 'nav-link is-active' }}
            >
              {title}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
