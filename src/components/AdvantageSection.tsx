import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { TripAdvantage } from "../models/trip";

type AdvantageSectionProps = {
    advantage: TripAdvantage;
}

export default function AdvantageSection({ advantage }: AdvantageSectionProps) {

    return <Flex gap={2}>
        <Box>
            <Icon boxSize={8} />
        </Box>
        <Box>
            <Heading as="h6" size="md" lineHeight={8}>{advantage.title}</Heading>
            <Text>{advantage.description}</Text>
        </Box>
    </Flex>;
}