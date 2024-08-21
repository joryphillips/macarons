import { Moon, Sun } from "lucide-react";
import { IconButton } from "../ui";

import { useTheme } from "../ThemeProvider/ThemeProvider";
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
        return <Moon color={vars.colors.primary.lowContrastText} />;
      default:
      case "light":
        return <Sun color={vars.colors.primary.lowContrastText} />;
    }
  };

  return (
    <IconButton
      variant="ghostPrimary"
      aria-label="Toggle theme between light and dark"
      onClick={() => themeToggle()}
    >
      {getModeIcon()}
    </IconButton>
  );
}
