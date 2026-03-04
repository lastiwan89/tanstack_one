import { Location } from '#/content/location'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/location/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <p className="island-kicker mb-3">location</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
          Top Destinations
        </h1>
        <p className="mb-8 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
          This base starter intentionally keeps things light: two routes, clean
          structure, and the essentials you need to build from scratch.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative overflow-hidden py-6">
          {Location.map((items, index) => (
            <div
              className="island-shell feature-card rise-in rounded-2xl p-3"
              style={{ animationDelay: `${index * 90 + 80}ms` }}
              key={index}
            >
              <img src={items.src} alt={items.name} />
              <div className="mt-2">
                <p className="font-medium text-transparent bg-linear-to-r from-cyan-400 to-fuchsia-500 bg-clip-text">
                  {items.name}
                </p>
                <p>
                  Rating :{' '}
                  <span className="font-semibold text-gray-100">
                    {items.rating}
                  </span>{' '}
                  / 10
                </p>
                <p>{items.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            See all
          </Link>
        </div>
      </section>
    </main>
  )
}
