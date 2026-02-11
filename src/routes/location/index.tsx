import { getPopularLocations } from '@/data/popular-locations'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/location/')({
  component: LocationComponent,
  loader: async () => await getPopularLocations(),
})

function LocationComponent() {
  const popularLocation = Route.useLoaderData()
  return (
    <div className="bg-gray-800">
      <div className="px-4 md:px-8 py-4 md:py-12 flex gap-4 flex-col">
        <div>
          <h2 className="text-2xl font-bold text-gray-200">Popular Location</h2>
          <p className="text-gray-400">
            Explore the most popular location from the island
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularLocation.map((items) => (
            <div key={items.id} className="relative overflow-hidden">
              <img src={items.location} alt={items.name} />
              <div className="absolute inset-0 flex items-end justify-start">
                <p className="px-2 py-0.5 bg-rose-300">{items.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
