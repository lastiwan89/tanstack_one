import FeatureSection from '@/components/singlepage/feature-section'
import HeroSection from '@/components/singlepage/hero-section'
import SubscribeSection from '@/components/singlepage/subscribe-section'
import { getPopularLocations } from '@/data/popular-locations'
import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => await getPopularLocations(),
})

function App() {
  const popularLocation = Route.useLoaderData()
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero section */}
      <main className="relative py-20 px-6 text-center overflow-hidden">
        <HeroSection />
      </main>
      {/* Feature section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <FeatureSection />
      </section>

      {/* Popular location section */}
      <section className="px-4 md:px-6 lg:px-72 py-16 flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-bold text-gray-200">
            Recomended location
          </h2>
          <p className="text-gray-400 text-sm">
            Explore the best location from our recomendations.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {popularLocation.slice(0, 4).map((items) => (
            <div className="overflow-hidden relative" key={items.id}>
              <img src={items.location} alt={items.name} />
              <div className="absolute inset-0 flex justify-start items-end">
                <p className="text-gray-900 font-medium text-lg p-0.5 bg-rose-300">
                  {items.name}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Link
            className="p-2 bg-rose-300 text-gray-900 font-medium"
            to="/location"
          >
            Discover more
          </Link>
        </div>
      </section>

      {/* Subscribe section */}
      <section className="md:px-72 px-4">
        <SubscribeSection />
      </section>
    </div>
  )
}
