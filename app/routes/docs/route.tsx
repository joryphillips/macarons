import { Link, Outlet, useLocation } from "@remix-run/react";
import {
  ThemeProvider,
  useSpecifiedTheme,
} from "~/components/ThemeProvider/ThemeProvider";
import { Box, VStack, Text } from "~/components/ui";
import { TooltipProvider } from "~/components/ui/Tooltip/Tooltip";
import { useState } from "react";
import { SideNav } from "./SideNav";
import { TopBar } from "./TopBar";
import { articleStyles, mainContentContainerStyles } from "./docs.css";
import { Titlemark } from "~/components/logo/Titlemark";

function IndexIntro() {
  return (
    <VStack width="100%" alignItems="flex-start" as="section">
      <Titlemark />
      <VStack width="100%" alignItems="flex-start" as="section">
        <Text as="p">Welcome!</Text>
        <Text as="p">
          Macarons is a design system with styled UI components intended for
          React projects. It was built with{" "}
          <Link to="https://vanilla-extract.style" target="_blank">
            Vanilla Extract
          </Link>{" "}
          and{" "}
          <Link to="https://www.radix-ui.com/" target="_blank">
            Radix Primitives
          </Link>
          , and is heavily influenced by{" "}
          <Link to="https://ui.shadcn.com/" target="_blank">
            shadcn/ui
          </Link>
          . It also draws inspiration and lessons from the use of Material UI,
          Tailwind, and Chakra UI.
        </Text>
      </VStack>
      <Link to="/docs/intro">More</Link>
    </VStack>
  );
}

export default function UI() {
  const location = useLocation();
  const { specifiedTheme } = useSpecifiedTheme();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const hideSidebar = () => setShowSidebar(false);
  const showIntro =
    location.pathname === "/docs/" ||
    location.pathname === "/docs" ||
    location.pathname === "/";

  return (
    <ThemeProvider specifiedTheme={specifiedTheme}>
      <TooltipProvider>
        {/* Top bar */}
        <TopBar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />

        {/* Main Content */}
        <Box as="main" className={mainContentContainerStyles}>
          {/* Sidebar */}
          <SideNav
            display={{
              mobile: showSidebar ? "flex" : "none",
              tablet: "flex",
            }}
            hideSidebar={hideSidebar}
          />

          {/* Main Content Panel */}
          <Box className={articleStyles} as="article">
            {showIntro && <IndexIntro />}
            <Outlet />
          </Box>
        </Box>
      </TooltipProvider>
    </ThemeProvider>
  );
}
