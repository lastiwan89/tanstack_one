import { BsTwitterX } from 'react-icons/bs'
import { FaGithub, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-(--line) px-4 pb-14 pt-10 text-(--sea-ink-soft)">
      <div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="m-0 text-sm">
          <span className="sr-only">build year</span>
          &copy; {year} Jagotrip Travel Agency. All rights reserved.
        </p>
        <p className="island-kicker m-0">
          Built with{' '}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            chillrains_
          </a>
        </p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <a
          href="https://x.com/tan_stack"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)"
        >
          <span className="sr-only">Follow TanStack on X</span>
          <BsTwitterX size={26} />
        </a>
        <a
          href="https://github.com/TanStack"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)"
        >
          <span className="sr-only">Go to TanStack GitHub</span>
          <FaGithub size={28} />
        </a>
        <a
          href="https://github.com/TanStack"
          target="_blank"
          rel="noreferrer"
          className="rounded-xl p-2 text-(--sea-ink-soft) transition hover:bg-(--link-bg-hover) hover:text-(--sea-ink)"
        >
          <span className="sr-only">View on instagram</span>
          <FaInstagram size={28} />
        </a>
      </div>
    </footer>
  )
}
