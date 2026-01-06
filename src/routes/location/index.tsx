import { createFileRoute } from '@tanstack/react-router'
import { CarouselSpacing } from '@/components/carousel-card'

export const Route = createFileRoute('/location/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <CarouselSpacing />
    </div>
  )
}
