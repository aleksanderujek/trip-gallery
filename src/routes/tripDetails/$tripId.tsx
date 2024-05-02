import { createFileRoute } from '@tanstack/react-router'

const fetchTripDetails = async (tripId: string) => {
    const response = await fetch(
        `https://trip-gallery-json-server.vercel.app/trips/${tripId}`
    );
    if (!response.ok) {
        throw new Error("No data");
    }
    return response.json();
}

export const Route = createFileRoute('/tripDetails/$tripId')({
    component: TripDetails,
    loader: ({ params }) => fetchTripDetails(params.tripId),
    loaderDeps: () => [],
    staleTime: Infinity,
    preloadStaleTime: Infinity,
})

function TripDetails() {
    const data = Route.useLoaderData();
    console.log(data);
    return <div className="p-2">Hello from {data.title}!</div>
}