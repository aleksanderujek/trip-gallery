import { Box, Card, Flex, Grid, GridItem, Heading, Image, Link, ListItem, SimpleGrid, Stack, StackDivider, Text, UnorderedList } from '@chakra-ui/react';
import { createFileRoute, Link as RouterLink } from '@tanstack/react-router'
import { Trip } from '../../models/trip';
import AdvantageSection from '../../components/AdvantageSection';
import { emissionFormatter } from '../../utils/emissionFormatter';
import pluralize from '../../utils/pluralize';

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
    return (
        <>
            <Box>
                <Link as={RouterLink} to="/" textDecoration="underline" color={"gray.500"}>Go Back</Link>
            </Box>
            <Stack mt={8} mb={8} gap={2}>
                <Heading>{trip.title}</Heading>
                <Text color="gray.500">{trip.subtitle}</Text>
            </Stack>
            <Grid templateColumns='repeat(6, 1fr)' gap={8}>
                <GridItem colSpan={[6, 6, 6, 4]}>
                    <Image src={trip.photoUrl} width="100%" height={400} objectFit="cover" borderRadius={12} alt={trip.title} />
                </GridItem>
                <GridItem colSpan={[6, 6, 6, 2]}>
                    <Card p={4} display={"block"}>
                        <Stack divider={<StackDivider />} spacing='4'>
                            <Flex gap={4} flexDir="column">
                                <Heading as="h3" size="lg">{pluralize(trip.days, 'day')}</Heading>
                                <Text fontWeight="600" fontSize="sm">Emissions: {emissionFormatter(trip.co2kilograms)} CO<Text fontSize="sm" as={"sub"} textAlign="right" fontWeight={600}>2</Text>e</Text>
                            </Flex>
                            <Box>
                                <Heading as="h6" size={"sm"}>Countries included:</Heading>
                                <Box p={2}>

                                    <UnorderedList>
                                        <SimpleGrid columns={2}>
                                            {trip.countries.map((country) => (
                                                <ListItem key={country}>{country}</ListItem>
                                            ))}
                                        </SimpleGrid>
                                    </UnorderedList>
                                </Box>
                            </Box>
                        </Stack>
                    </Card>
                </GridItem>
                <GridItem colSpan={[6, 6, 6, 4]}>
                    <Stack mt={8} divider={<StackDivider />} spacing={8}>
                        <Box>
                            <Heading as="h3" size="md" mb={8}>Overview</Heading>
                            <SimpleGrid columns={[1, 1, 2]} spacing={4}>
                                {trip.advantages.map((advantage) => (
                                    <AdvantageSection key={advantage.title} advantage={advantage} />
                                ))}
                            </SimpleGrid>
                        </Box>
                        <Text>{trip.description}</Text>
                    </Stack>
                </GridItem>
            </Grid>

        </>

    )
}