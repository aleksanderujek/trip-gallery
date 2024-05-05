import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createRootRoute, createRouter } from "@tanstack/react-router";
import { render } from "@testing-library/react";
import { theme } from "../theme/theme";

export function testRender(component: () => React.JSX.Element) {
  const rootRoute = createRootRoute({
    component,
  });

  const router = createRouter({ routeTree: rootRoute });

  render(
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}