import { createFileRoute } from '@tanstack/react-router'

const fetchTrips = async () => {
    const response = await fetch(
        "https://trip-gallery-json-server.vercel.app/trips"
    );
    if (!response.ok) {
        throw new Error("No data");
    }
    return response.json();
}

export const Route = createFileRoute('/')({
    component: Index,
    loader: () => fetchTrips(),
    staleTime: Infinity,
    preloadStaleTime: Infinity,
})

function Index() {
    const data = Route.useLoaderData();
    console.log(data);
    return (
        <div className="p-2">
            <h3>Welcome Home!</h3>
        </div>
    )
}