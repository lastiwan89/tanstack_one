import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { FaInstagram } from 'react-icons/fa'
import { IoMenu, IoClose } from 'react-icons/io5'
import { BsTwitterX } from 'react-icons/bs'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navlink = [
    ['Home', '/'],
    ['Location', '/location'],
    ['Work', '/work'],
    ['Paket', '/paket'],
    ['Blog', '/blog'],
    ['About', '/about'],
    ['Contact', '/contact'],
  ]
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) md:px-6 lg:px-8 backdrop-blur-lg">
        <nav className="page-wrap flex flex-wrap items-center justify-between gap-x-3 gap-y-2 py-3 sm:py-4">
          <div className="flex gap-2 items-center">
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
                <span className="sr-only">
                  Go to Jagojalan Official Instagram
                </span>
                <FaInstagram size={28} />
              </a>
              <ThemeToggle />
            </div>
          </div>

          <div className="order-3 md:flex hidden w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-2 sm:w-auto sm:flex-nowrap sm:pb-0">
            {navlink.map(([title, href], index) => (
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
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 rounded-lg md:hidden transition-colors"
            aria-label="Open menu"
          >
            <IoMenu size={24} />
          </button>
        </nav>
        <aside
          className={`fixed top-0 left-0 h-full w-screen bg-(--header-bg) text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between py-3 px-7">
            <h2 className="m-0 shrink-0 text-base font-semibold tracking-tight">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1.5 text-sm text-(--sea-ink) no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
              >
                <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
                JagoJalan Nusantara
              </Link>
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-(--chip-bg) rounded-l hover:bg-(--header-bg) transition-colors"
              aria-label="Close menu"
            >
              <IoClose className="text-(--sea-ink)" size={24} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 items-center p-8 bg-(--header-bg) border-(--line">
            {navlink.map(([title, href], index) => (
              <Link
                onClick={() => setIsOpen(false)}
                to={href}
                key={index}
                className="nav-link"
                activeProps={{ className: 'nav-link is-active' }}
              >
                {title}
              </Link>
            ))}
          </nav>
        </aside>
      </header>
    </>
  )
}
