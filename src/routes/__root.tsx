import { Box } from '@chakra-ui/react'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <Box p={6}>
            <Outlet />
            <TanStackRouterDevtools />
        </Box>
    ),
})