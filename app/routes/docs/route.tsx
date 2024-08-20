import { Outlet } from "@remix-run/react";
import {
  ThemeProvider,
  useSpecifiedTheme,
} from "~/components/ThemeProvider/ThemeProvider";
import { Box, HStack } from "~/components/ui";
import { TooltipProvider } from "~/components/ui/Tooltip/Tooltip";
import { useState } from "react";
import { SideNav } from "./SideNav";
import { TopBar } from "./TopBar";
import { articleStyles } from "./docs.css";

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
        <HStack
          as="main"
          maxWidth="xl"
          marginTop={10}
          marginX="auto"
          paddingX={showSidebar ? 0 : 4}
          width={{ mobile: "100vw", desktop: "100%" }}
          justifyContent={{ mobile: "flex-start", desktop: "center" }}
          alignItems="flex-start"
          gap={8}
          boxSizing="border-box"
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
          <Box className={articleStyles} as="article">
            <Outlet />
          </Box>
        </HStack>
      </TooltipProvider>
    </ThemeProvider>
  );
}
