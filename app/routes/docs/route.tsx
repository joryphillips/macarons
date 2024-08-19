import { Outlet } from "@remix-run/react";
import {
  ThemeProvider,
  useSpecifiedTheme,
} from "~/components/ThemeProvider/ThemeProvider";
import { Box, HStack, VStack } from "~/components/ui";
import { TooltipProvider } from "~/components/ui/Tooltip/Tooltip";
import { useState } from "react";
import { SideNav } from "./SideNav";
import { TopBar } from "./TopBar";

export default function UI() {
  const { specifiedTheme } = useSpecifiedTheme();

  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  const hideSidebar = () => setShowSidebar(false);

  return (
    <ThemeProvider specifiedTheme={specifiedTheme}>
      <TooltipProvider>
        {/* Top bar */}
        <TopBar toggleSidebar={toggleSidebar} showSidebar={showSidebar} />

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
          {/* Lower page */}
          <HStack
            width="100%"
            justifyContent={{ mobile: "flex-start", desktop: "center" }}
            alignItems="flex-start"
            gap={8}
            paddingTop={4}
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
