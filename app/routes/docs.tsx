import { Outlet, useRouteLoaderData } from "@remix-run/react";
import type { UserTheme } from "~/components/ThemeProvider/ThemeProvider";
import { ThemeProvider } from "~/components/ThemeProvider/ThemeProvider";
import { Box, Divider, HStack, Heading, VStack, Text } from "~/components/ui";
import { TooltipProvider } from "~/components/ui/Tooltip/Tooltip";
import { NavBarLink } from "~/components/ui/NavBarLink/NavBarLink";
import { MacaronStack } from "~/components/logo/MacaronStack";

function NavBarHeading({ children }: { children: React.ReactNode }) {
  return (
    <Box width="100%" padding={2}>
      <Heading as="h3" size="sm" color="highContrastText">
        {children}
      </Heading>
    </Box>
  );
}

export default function UI() {
  const rootMatchesData = useRouteLoaderData("root");
  const theme = rootMatchesData?.theme as UserTheme;

  return (
    <ThemeProvider specifiedTheme={theme}>
      <TooltipProvider>
        <VStack
          as="main"
          height="100vh"
          maxWidth="xl"
          marginX="auto"
          spacing={8}
          paddingTop={4}
          paddingX={4}
          paddingBottom={8}
          alignItems="center"
        >
          {/* Page header */}
          <VStack width="100%" gap={4} alignItems="center">
            <Box marginY={2} width="100%">
              <Heading
                color="primaryHighContrastText"
                align="center"
                size="4xl"
                style={{
                  fontFamily: "Georgia, serif",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  transform: "scaleX(0.86)",
                }}
              >
                macarons
              </Heading>
              <HStack gap={0} justifyContent="center" flexWrap="nowrap">
                <MacaronStack width="40px" count={12} />
              </HStack>
            </Box>
            <Heading as="h2" size="md" color="primaryHighContrastText">
              Design System and Styled UI Components
            </Heading>
          </VStack>

          <Divider />

          {/* Lower page */}
          <HStack gap={4} width="100%" alignItems="flex-start">
            {/* Sidebar */}
            <VStack
              gap={4}
              width="100%"
              maxWidth={{ tablet: "3xs", mobile: "4xs" }}
              alignItems="flex-start"
              as="nav"
            >
              <NavBarLink to="/docs/intro">Introduction</NavBarLink>
              <NavBarLink to="/docs/philosophy">Philosophy</NavBarLink>

              <Divider />

              <NavBarHeading>Theme/Design System</NavBarHeading>

              <NavBarLink to="/docs/color">Color</NavBarLink>
              <NavBarLink to="/docs/darkmode">Dark mode</NavBarLink>
              <NavBarLink to="/docs/spacing">Spacing</NavBarLink>
              <NavBarLink to="/docs/border">Border and Radius</NavBarLink>
              <NavBarLink to="/docs/breakpoints">Breakpoints</NavBarLink>
              <NavBarLink to="/docs/shadows">Shadows</NavBarLink>

              <Divider />

              <NavBarHeading>Layout</NavBarHeading>

              <NavBarLink to="/docs/box">Box</NavBarLink>
              <NavBarLink to="/docs/stack">Stack</NavBarLink>
              <NavBarLink to="/docs/card">Card</NavBarLink>

              <Divider />

              <NavBarHeading>Components</NavBarHeading>

              <NavBarLink to="/docs/alert">Alert</NavBarLink>
              <NavBarLink to="/docs/alert-dialog">Alert Dialog</NavBarLink>
              <NavBarLink to="/docs/badge">Badge</NavBarLink>
              <NavBarLink to="/docs/button">Button</NavBarLink>
              <NavBarLink to="/docs/checkbox">Checkbox</NavBarLink>
              <NavBarLink to="/docs/dialog">Dialog</NavBarLink>
              <NavBarLink to="/docs/divider">Divider</NavBarLink>
              <NavBarLink to="/docs/dropdown">Dropdown</NavBarLink>
              <NavBarLink to="/docs/input">Input</NavBarLink>
              <NavBarLink to="/docs/label">Label</NavBarLink>
              <NavBarLink to="/docs/popover">Popover</NavBarLink>
              <NavBarLink to="/docs/select">Select</NavBarLink>
              <NavBarLink to="/docs/spinner">Spinner</NavBarLink>
              <NavBarLink to="/docs/tooltip">Tooltip</NavBarLink>

              <Divider />

              <NavBarHeading>Typography</NavBarHeading>

              <NavBarLink to="/docs/text">Text</NavBarLink>
              <NavBarLink to="/docs/heading">Heading</NavBarLink>
            </VStack>

            {/* Main Content Panel */}
            <Box paddingBottom={8} maxWidth="prose" width="100%" as="article">
              <Outlet />
            </Box>
          </HStack>
        </VStack>
      </TooltipProvider>
    </ThemeProvider>
  );
}
