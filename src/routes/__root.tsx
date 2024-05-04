import { Box } from '@chakra-ui/react'
import { createRootRoute, Outlet, ParsedLocation, ScrollRestoration } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: () => (
        <Box p={6}>
            <ScrollRestoration getKey={(location: ParsedLocation) => location.pathname} />
            <Outlet />
        </Box>
    ),
})