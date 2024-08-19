import { X, Menu } from "lucide-react";
import { MacaronsTitleSVG } from "~/components/logo/MacaronsTitleSVG";
import { ThemeToggle } from "~/components/ThemeToggle/ThemeToggle";
import { HStack, IconButton, Box } from "~/components/ui";
import { vars } from "~/theme/theme.css";

export function TopBar({
  toggleSidebar,
  showSidebar,
}: {
  toggleSidebar: () => void;
  showSidebar: boolean;
}) {
  return (
    <HStack
      gap={1}
      padding={1}
      position="fixed"
      top={0}
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="appBackground"
      borderWidth="standard"
      borderColor="subtleBorder"
      borderBottomStyle="solid"
      zIndex={1}
    >
      <HStack
        gap={1}
        paddingLeft={{ mobile: 2, tablet: 4 }}
        width="100%"
        alignItems="center"
      >
        <MacaronsTitleSVG height="0.75rem" width="auto" />
      </HStack>
      <ThemeToggle />
      <Box display={{ mobile: "flex", tablet: "none" }}>
        <IconButton variant="ghost" onClick={toggleSidebar}>
          {showSidebar ? (
            <X size="1.5rem" color={vars.colors.primary.lowContrastText} />
          ) : (
            <Menu size="1.5rem" color={vars.colors.primary.lowContrastText} />
          )}
        </IconButton>
      </Box>
    </HStack>
  );
}
