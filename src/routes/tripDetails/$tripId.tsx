import { Box, Card, CardBody, CardHeader, Grid, Heading, Image, Link, List, ListItem, SimpleGrid, Stack, StackDivider, Text, UnorderedList } from '@chakra-ui/react';
import { createFileRoute, Link as RouterLink } from '@tanstack/react-router'
import { Trip } from '../../models/trip';

const fetchTripDetails = async (tripId: string): Promise<Trip> => {
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
    const trip = Route.useLoaderData();
    console.log(trip);
    return (
        <>
            <Box>
                <Link as={RouterLink} to="/">Go Back</Link>
            </Box>
            <Stack mt={8} gap={2}>
                <Heading>{trip.title}</Heading>
                <Text>{trip.subtitle}</Text>
            </Stack>
            <SimpleGrid columns={2} gap={2}>
                <Image src={trip.photoUrl} alt={trip.title} />
                <Card>
                    <Stack divider={<StackDivider />} spacing='4'>
                        <CardHeader>
                            <Heading as="h3" size="md">{trip.days} days</Heading>
                            <Text>Emissions: {trip.co2kilograms}</Text>
                        </CardHeader>
                        <CardBody>
                            <Heading as="h6" size={"sm"}>Countries</Heading>
                            {/* render items as two column unordered list */}
                            <UnorderedList>
                                <SimpleGrid columns={2}>
                                    {trip.countries.map((country) => (
                                        <ListItem key={country}>{country}</ListItem>
                                    ))}
                                </SimpleGrid>
                            </UnorderedList>
                        </CardBody>
                    </Stack>
                </Card>
            </SimpleGrid>
        </>

    )
}