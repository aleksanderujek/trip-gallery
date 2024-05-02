import { Box, Button, Card, Flex, Heading, Text } from "@chakra-ui/react";
import { Trip } from "../models/trip";
import { Link } from "@tanstack/react-router";
import { StarIcon } from "@chakra-ui/icons";

type TripCardProps = {
    trip: Trip;
}

function pluralize(count: number, singular: string, plural = `${singular}s`): string {
    return `${count} ${count === 1 ? singular : plural}`;
}

export default function TripCard({ trip }: TripCardProps) {
    const emission = trip.co2kilograms >= 1000 ? `${(trip.co2kilograms / 1000).toFixed(2)}t` : `${trip.co2kilograms.toFixed(0)}kg`;

    return (
        <Card margin="auto" p={4} bg="white" width="95%" height="100%">
            <Box height="100%" pt={12} bgImage={`linear-gradient(180deg, #00000088 30%, #ffffff44 100%), url(${trip.photoUrl})`} backgroundSize="cover" backgroundPosition="center" borderRadius={4} position="relative">
                <Heading as="h2" size="lg" textAlign="center" color="white" mb={1} p={1}>{trip.title}</Heading>
                <Text textAlign="center" color="white">{pluralize(trip.countries.length, 'country', 'countries')}, {pluralize(trip.days, 'day')}</Text>
                <Box position="absolute" top="40%" w="100%" textAlign="center">
                    <Button as={Link} to={`/tripDetails/${trip.id}`} colorScheme="blue">Learn more</Button>
                </Box>
                <Flex direction="column" gap={2} alignItems="center" justifyContent="flex-end" position="absolute" bottom={0} width="100%">
                    <Box borderRadius="md" width='80%' bg="#151a2e" color="white" maxWidth="80%" p={4}>
                        <Flex justifyContent="space-between" gap={2} alignItems="baseline" >
                            <Heading as="h6" size="sm">Emissions offset:</Heading>
                            <Text fontWeight="600" fontSize="sm" textAlign="right">{emission} CO<Text fontSize="sm" as={"sub"} textAlign="right" fontWeight={600}>2</Text>e</Text>
                        </Flex>
                    </Box>
                    <Box width='80%' bg="white" color="#151a2e" borderTopRadius="md" maxWidth="80%" margin="auto" p={4}>
                        <Flex justifyContent="space-between" gap={2} alignItems="center" >
                            <Heading as="h6" size="sm">Trip rating:</Heading>
                            <Flex gap={1} alignItems="center">
                                {Array(5)
                                    .fill('')
                                    .map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            color={i < trip.rating ? 'yellow.300' : 'gray.300'}
                                        />
                                    ))}
                                <Text fontWeight="600" fontSize="sm" textAlign="right">{trip.rating}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Card>
    );
}