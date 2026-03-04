import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/location/$locationId')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  return <div>Hello from parameter {params.locationId} </div>
}
