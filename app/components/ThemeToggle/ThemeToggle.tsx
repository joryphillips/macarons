import { Moon, Sun } from "lucide-react";
import { Box } from "../ui";

import { useTheme } from "../ThemeProvider/ThemeProvider";
import { themeToggleClasses } from "./ThemeToggle.css";
import { vars } from "~/theme/theme.css";

export function ThemeToggle() {
  const { userTheme, setUserTheme } = useTheme();

  const themeToggle = () => {
    // toggle between dark and light modes
    const nextMode = userTheme === "dark" ? "light" : "dark";
    setUserTheme(nextMode);
  };

  const getModeIcon = () => {
    switch (userTheme) {
      case "dark":
        return <Moon size={24} color={vars.colors.primary.lowContrastText} />;
      default:
      case "light":
        return <Sun size={24} color={vars.colors.primary.lowContrastText} />;
    }
  };

  return (
    <Box
      as="button"
      className={themeToggleClasses}
      aria-label="Toggle theme between light and dark"
      onClick={() => themeToggle()}
    >
      {getModeIcon()}
    </Box>
  );
}
