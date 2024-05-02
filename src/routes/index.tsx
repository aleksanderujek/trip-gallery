import { Link, createFileRoute } from '@tanstack/react-router'
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { useRef } from 'react';

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
    const listRef = useRef<HTMLDivElement>(null);
    console.log(data);
    const columnCount = 3;

    const rowCount = Math.ceil(data.length / columnCount);

    const virtualizer = useWindowVirtualizer({
        count: rowCount,
        estimateSize: () => 25,
        overscan: 12,
        scrollMargin: listRef.current?.offsetTop ?? 0,
    })
    return (
        <div ref={listRef} className="p-2">
            <div
                style={{
                    height: `${virtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                {virtualizer.getVirtualItems().map((item) => {
                    return [...Array(columnCount)].map((_, columnIndex) => {
                        const index = item.index * columnCount + columnIndex;
                        if (index >= data.length) {
                            return null; // Don't render if index is out of range
                        }
                        return (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: `${(100 / columnCount) * columnIndex}%`,
                                    width: `${100 / columnCount}%`,
                                    height: `${item.size}px`,
                                    transform: `translateY(${item.start}px)`,
                                }}
                            >
                                Item {index}: <Link to="/tripDetails/$tripId" params={{ tripId: data[index].id }} >{data[index].title}</Link>
                            </div>
                        );
                    });
                })}
            </div>
        </div>
    )
}