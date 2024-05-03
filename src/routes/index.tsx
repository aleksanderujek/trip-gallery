import { createFileRoute } from '@tanstack/react-router'
import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { useEffect, useRef } from 'react';
import TripCard from '../components/TripCard';
import { useBreakpointValue } from '@chakra-ui/react';
import { Trip } from '../models/trip';

const fetchTrips = async (): Promise<Trip[]> => {
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
    const columnCount = useBreakpointValue({
        base: 1,
        md: 2,
        lg: 3,
    }, { ssr: false });

    const height = useBreakpointValue({
        base: 450,
        md: 420,
        xl: 400,
    }, { ssr: false })

    const rowCount = Math.ceil(data.length / columnCount!);

    const advantage = data.map(trip => trip.advantages.length).reduce((a, b) => a > b ? a : b, 0);
    console.log(advantage);

    const virtualizer = useWindowVirtualizer({
        count: rowCount,
        estimateSize: () => height!,
        overscan: columnCount! * 4,
        scrollMargin: listRef.current?.offsetTop ?? 0,
        gap: 16,
    });

    useEffect(() => virtualizer.measure(), [columnCount, height, data.length]);
    return (
        <div ref={listRef}>
            <div
                style={{
                    height: `${virtualizer.getTotalSize()}px`,
                    width: '100%',
                    position: 'relative',
                }}
            >
                {virtualizer.getVirtualItems().map((item) => {
                    return [...Array(columnCount)].map((_, columnIndex) => {
                        const index = item.index * columnCount! + columnIndex;
                        if (index >= data.length) {
                            return null; // Don't render if index is out of range
                        }
                        return (
                            <div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: `${(100 / columnCount!) * columnIndex}%`,
                                    width: `${100 / columnCount!}%`,
                                    height: `${item.size}px`,
                                    transform: `translateY(${item.start}px)`,
                                }}
                            >
                                <TripCard trip={data[index]} />
                            </div>
                        );
                    });
                })}
            </div>
        </div>
    )
}