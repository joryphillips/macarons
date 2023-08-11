import { Moon, Sun } from "lucide-react";
import { Box } from "../ui";

import { useTheme } from "../ThemeProvider/ThemeProvider";
import { themeToggleClasses } from "./ThemeToggle.css";

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
        return <Moon size={24} />;
      default:
      case "light":
        return <Sun size={24} />;
    }
  };

  return (
    <Box
      as="button"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="sm"
      cursor="pointer"
      className={themeToggleClasses}
      title="Toggle theme"
      onClick={() => themeToggle()}
    >
      {getModeIcon()}
    </Box>
  );
}
