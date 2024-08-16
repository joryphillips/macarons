import { Outlet, useRouteLoaderData } from "@remix-run/react";
import type { UserTheme } from "~/components/ThemeProvider/ThemeProvider";
import { ThemeProvider } from "~/components/ThemeProvider/ThemeProvider";
import {
  Box,
  Divider,
  HStack,
  Heading,
  VStack,
  IconButton,
  StackProps,
} from "~/components/ui";
import { TooltipProvider } from "~/components/ui/Tooltip/Tooltip";
import { NavBarLink } from "~/components/NavBarLink/NavBarLink";
import { Titlemark } from "~/components/logo/Titlemark";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "~/components/ThemeToggle/ThemeToggle";
import { vars } from "~/theme/theme.css";

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

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const hideSidebar = () => setShowSidebar(false);

  return (
    <ThemeProvider specifiedTheme={theme}>
      <TooltipProvider>
        {/* Top bar */}
        <HStack
          gap={1}
          padding={1}
          position="fixed"
          top={0}
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
          backgroundColor="appBackground"
          borderWidth="standard"
          borderColor="subtleBorder"
          borderBottomStyle="solid"
          zIndex={1}
        >
          <ThemeToggle />
          <Box display={{ mobile: "flex", tablet: "none" }}>
            <IconButton variant="ghost" onClick={toggleSidebar}>
              {showSidebar ? (
                <X size="1.5rem" color={vars.colors.primary.lowContrastText} />
              ) : (
                <Menu
                  size="1.5rem"
                  color={vars.colors.primary.lowContrastText}
                />
              )}
            </IconButton>
          </Box>
        </HStack>

        {/* Main Content */}
        <VStack
          as="main"
          height="100vh"
          maxWidth="xl"
          marginX="auto"
          spacing={8}
          paddingTop={12}
          paddingX={showSidebar ? 0 : 4}
          paddingBottom={8}
          alignItems="center"
          overflowY={showSidebar ? "hidden" : "scroll"}
        >
          {/* Page header */}
          <Titlemark />

          <Divider />

          {/* Lower page */}
          <HStack
            width="100%"
            justifyContent={{ mobile: "flex-start", desktop: "center" }}
            alignItems="flex-start"
            gap={8}
          >
            {/* Sidebar */}
            <SideNav
              display={{
                mobile: showSidebar ? "flex" : "none",
                tablet: "flex",
              }}
              hideSidebar={hideSidebar}
            />

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

function SideNav({
  hideSidebar,
  ...props
}: StackProps & { hideSidebar: () => void }) {
  return (
    <VStack
      position={{ mobile: "fixed", tablet: "relative" }}
      maxWidth={{ tablet: "3xs", mobile: "100%" }}
      top={{ mobile: 12, tablet: "auto" }}
      gap={{ mobile: 0, tablet: 4 }}
      paddingTop={{ mobile: 4, tablet: 0 }}
      paddingBottom={12}
      width="100%"
      alignItems="flex-start"
      backgroundColor="appBackground"
      height={{ mobile: "100vh", tablet: "auto" }}
      overflowY={{ mobile: "scroll", tablet: "visible" }}
      as="nav"
      {...props}
    >
      <VStack
        width="100%"
        alignItems="flex-start"
        paddingX={{ mobile: 2, tablet: 0 }}
      >
        <NavBarLink onClick={hideSidebar} to="/docs/intro">
          Introduction
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/philosophy">
          Philosophy
        </NavBarLink>

        <Divider />

        <NavBarHeading>Theme/Design System</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/color">
          Color
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/darkmode">
          Dark mode
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/shadows">
          Shadows
        </NavBarLink>
        <NavBarLink disabled onClick={hideSidebar} to="/docs/spacing">
          Spacing
        </NavBarLink>
        <NavBarLink disabled onClick={hideSidebar} to="/docs/border">
          Border and Radius
        </NavBarLink>
        <NavBarLink disabled onClick={hideSidebar} to="/docs/breakpoints">
          Breakpoints
        </NavBarLink>

        <Divider />

        <NavBarHeading>Layout</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/box">
          Box
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/stack">
          Stack
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/card">
          Card
        </NavBarLink>

        <Divider />

        <NavBarHeading>Components</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/alert">
          Alert
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/alert-dialog">
          Alert Dialog
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/badge">
          Badge
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/button">
          Button
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/checkbox">
          Checkbox
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/dialog">
          Dialog
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/divider">
          Divider
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/dropdown">
          Dropdown
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/input">
          Input
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/label">
          Label
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/popover">
          Popover
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/select">
          Select
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/spinner">
          Spinner
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/tooltip">
          Tooltip
        </NavBarLink>

        <Divider />

        <NavBarHeading>Typography</NavBarHeading>

        <NavBarLink onClick={hideSidebar} to="/docs/text">
          Text
        </NavBarLink>
        <NavBarLink onClick={hideSidebar} to="/docs/heading">
          Heading
        </NavBarLink>
      </VStack>
    </VStack>
  );
}
