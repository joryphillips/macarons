import { NavLink, Outlet } from "@remix-run/react";
import type { UserTheme } from "~/components/ThemeProvider/ThemeProvider";
import { ThemeProvider } from "~/components/ThemeProvider/ThemeProvider";
import { Divider, HStack, Heading, VStack } from "~/components/ui";
import { useMatchesData } from "~/util/useMatchesData";

export default function UI() {
  const rootMatchesData = useMatchesData("root");
  const theme = rootMatchesData?.theme as UserTheme;

  return (
    <ThemeProvider specifiedTheme={theme}>
      <VStack
        as="main"
        height="100vh"
        maxWidth="xl"
        marginX="auto"
        spacing={8}
        padding={4}
        alignItems="center"
      >
        <VStack width="100%" alignItems="flex-start" spacing={5}>
          <VStack width="100%" alignItems="flex-start" spacing={4}>
            <Heading as="h1" size="2xl">
              Macarons
            </Heading>
            <Heading as="h2" size="md" color="lowContrastText">
              Design System and Styled UI Components Built with Vanilla Extract
              and Radix
            </Heading>
          </VStack>
        </VStack>
        <Divider />
        <HStack gap={4} width="100%" alignItems="flex-start">
          <VStack
            gap={8}
            minWidth={{ tablet: "3xs", mobile: "fit" }}
            maxWidth="md"
            alignItems="flex-start"
          >
            <NavLink to="/docs/intro">Introduction</NavLink>
            <NavLink to="/docs/philosophy">Philosophy</NavLink>

            <Divider />

            <NavLink to="/docs/alert">Alert</NavLink>
            <NavLink to="/docs/alert-dialog">Alert Dialog</NavLink>
            <NavLink to="/docs/badge">Badge</NavLink>
            <NavLink to="/docs/button">Button</NavLink>
            <NavLink to="/docs/checkbox">Checkbox</NavLink>
            <NavLink to="/docs/dialog">Dialog</NavLink>
            <NavLink to="/docs/divider">Divider</NavLink>
            <NavLink to="/docs/dropdown">Dropdown</NavLink>
            <NavLink to="/docs/heading">Heading</NavLink>
            <NavLink to="/docs/input">Input</NavLink>
            <NavLink to="/docs/label">Label</NavLink>
            <NavLink to="/docs/popover">Popover</NavLink>
            <NavLink to="/docs/select">Select</NavLink>
            <NavLink to="/docs/spinner">Spinner</NavLink>
            <NavLink to="/docs/text">Text</NavLink>
            <NavLink to="/docs/tooltip">Tooltip</NavLink>
            <Divider />
            <Heading as="h3" size="sm">
              Layout
            </Heading>
            <NavLink to="/docs/box">Box</NavLink>
            <NavLink to="/docs/stack">Stack</NavLink>
          </VStack>
          <VStack gap={8} width="100%" alignItems="flex-start" marginX="auto">
            <Outlet />
          </VStack>
        </HStack>
      </VStack>
    </ThemeProvider>
  );
}
