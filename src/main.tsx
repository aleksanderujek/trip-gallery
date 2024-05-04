import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { ChakraProvider, Flex, Spinner } from '@chakra-ui/react'
import { theme } from './theme/theme'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='custom-navy'
        size='xl'
      />
    </Flex>
  )
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </StrictMode>,
  )
}