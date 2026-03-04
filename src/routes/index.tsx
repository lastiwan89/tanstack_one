import { Location } from '#/content/location'
import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <section className="island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <p className="island-kicker mb-3">JagoJalan Nusantara</p>
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
          Lets start your journey with us
        </h1>
        <p className="mb-8 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
          Explore the natural beauty of the Lombok Island.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/location"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Explore Locations
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          [
            'Type-Safe Routing',
            'Routes and links stay in sync across every page.',
          ],
          [
            'Server Functions',
            'Call server code from your UI without creating API boilerplate.',
          ],
          [
            'Streaming by Default',
            'Ship progressively rendered responses for faster experiences.',
          ],
          [
            'Tailwind Native',
            'Design quickly with utility-first styling and reusable tokens.',
          ],
        ].map(([title, desc], index) => (
          <article
            key={title}
            className="island-shell feature-card rise-in rounded-2xl p-5"
            style={{ animationDelay: `${index * 90 + 80}ms` }}
          >
            <h2 className="mb-2 text-base font-semibold text-(--sea-ink)">
              {title}
            </h2>
            <p className="m-0 text-sm text-(--sea-ink-soft)">{desc}</p>
          </article>
        ))}
      </section>
      <section className="island-shell rise-in relative overflow-hidden my-8 rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
        <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
          Recomended locations
        </h1>
        <p className="mb-8 max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum magni
          repudiandae voluptas?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative overflow-hidden">
          {Location.map((items, index) => (
            <div
              className="island-shell feature-card rise-in rounded-2xl p-3"
              style={{ animationDelay: `${index * 90 + 80}ms` }}
              key={index}
            >
              <img src={items.src} alt={items.name} />
              <Link
                to="/location/$locationId"
                params={{ locationId: items.name }}
                className="mt-2"
              >
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
              </Link>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <Link
            to="/location"
            className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-(--lagoon-deep) no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
          >
            Discover more
          </Link>
        </div>
      </section>
      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Testimonials</p>
        <ul></ul>
      </section>
      <section className="island-shell mt-8 rounded-2xl p-6">
        <p className="island-kicker mb-2">Quick Start</p>
        <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-(--sea-ink-soft)">
          <li>
            Edit <code>src/routes/index.tsx</code> to customize the home page.
          </li>
          <li>
            Update <code>src/components/Header.tsx</code> and{' '}
            <code>src/components/Footer.tsx</code> for brand links.
          </li>
          <li>
            Add routes in <code>src/routes</code> and tweak visual tokens in{' '}
            <code>src/styles.css</code>.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quos iusto laboriosam aliquam sit, hic unde dolore dolores eligendi
            officiis adipisci!
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            voluptatibus commodi debitis sint dolore quam nisi. Sunt hic
            voluptatem unde.
          </li>
        </ul>
      </section>
    </main>
  )
}
