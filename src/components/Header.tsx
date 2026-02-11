import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  ClipboardType,
  Database,
  Menu,
  Network,
  SquareFunction,
  StickyNote,
  X,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [groupedExpanded, setGroupedExpanded] = useState<
    Record<string, boolean>
  >({})

  const navlink: Array<{ id: number; name: string; href: string }> = [
    { id: 0, name: 'Home', href: '/' },
    { id: 1, name: 'Location', href: '/location' },
    { id: 2, name: 'Work', href: '/work' },
    { id: 3, name: 'About', href: '/about' },
    { id: 4, name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <header className="p-4 flex justify-between items-center bg-gray-800 text-white shadow-lg">
        <h1 className="ml-4 text-xl font-semibold">
          <Link
            className="flex gap-2 items-center"
            onClick={() => setIsOpen(false)}
            to="/"
          >
            <img
              className="h-10"
              src="/tanstack-circle-logo.png"
              alt="Tanstack Logo color"
            />
            <span className="bg-linear-to-br from-cyan-400 via-cyan-500 to-orange-600 bg-clip-text text-transparent">
              JagoJalan
            </span>
          </Link>
        </h1>
        <nav className="hidden lg:flex gap-6 px-8">
          {navlink.map((items) => (
            <Link
              className="hover:text-gray-400 text-gray-100 font-medium"
              key={items.id}
              to={items.href}
            >
              {items.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-full md:w-80 bg-gray-800 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">
            <Link
              className="flex gap-2 items-center"
              onClick={() => setIsOpen(false)}
              to="/"
            >
              <img
                className="h-10"
                src="/tanstack-circle-logo.png"
                alt="Tanstack Logo color"
              />
              <span className="bg-linear-to-br from-cyan-400 via-cyan-500 to-orange-600 bg-clip-text text-transparent">
                JagoJalan
              </span>
            </Link>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          {navlink.map((items) => (
            <Link
              key={items.id}
              to={items.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
              activeProps={{
                className:
                  'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
              }}
            >
              <span className="font-medium">{items.name}</span>
            </Link>
          ))}

          {/* Demo Links Start */}

          <Link
            to="/demo/start/server-funcs"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <SquareFunction size={20} />
            <span className="font-medium">Start - Server Functions</span>
          </Link>

          <Link
            to="/demo/start/api-request"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <Network size={20} />
            <span className="font-medium">Start - API Request</span>
          </Link>

          <div className="flex flex-row justify-between">
            <Link
              to="/demo/start/ssr"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
              activeProps={{
                className:
                  'flex-1 flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
              }}
            >
              <StickyNote size={20} />
              <span className="font-medium">Start - SSR Demos</span>
            </Link>
            <button
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() =>
                setGroupedExpanded((prev) => ({
                  ...prev,
                  StartSSRDemo: !prev.StartSSRDemo,
                }))
              }
            >
              {groupedExpanded.StartSSRDemo ? (
                <ChevronDown size={20} />
              ) : (
                <ChevronRight size={20} />
              )}
            </button>
          </div>
          {groupedExpanded.StartSSRDemo && (
            <div className="flex flex-col ml-4">
              <Link
                to="/demo/start/ssr/spa-mode"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                activeProps={{
                  className:
                    'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
                }}
              >
                <StickyNote size={20} />
                <span className="font-medium">SPA Mode</span>
              </Link>

              <Link
                to="/demo/start/ssr/full-ssr"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                activeProps={{
                  className:
                    'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
                }}
              >
                <StickyNote size={20} />
                <span className="font-medium">Full SSR</span>
              </Link>

              <Link
                to="/demo/start/ssr/data-only"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
                activeProps={{
                  className:
                    'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
                }}
              >
                <StickyNote size={20} />
                <span className="font-medium">Data Only</span>
              </Link>
            </div>
          )}

          <Link
            to="/demo/prisma"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <Database size={20} />
            <span className="font-medium">Prisma</span>
          </Link>

          <Link
            to="/demo/tanstack-query"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <Network size={20} />
            <span className="font-medium">TanStack Query</span>
          </Link>

          <Link
            to="/demo/form/simple"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <ClipboardType size={20} />
            <span className="font-medium">Simple Form</span>
          </Link>

          <Link
            to="/demo/form/address"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2',
            }}
          >
            <ClipboardType size={20} />
            <span className="font-medium">Address Form</span>
          </Link>

          {/* Demo Links End */}
        </nav>
      </aside>
    </>
  )
}
