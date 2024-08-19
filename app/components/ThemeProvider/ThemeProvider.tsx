import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "@remix-run/react";

type Theme = "dark" | "light";
export type UserTheme = Theme | null;
export const themeKey = "app-theme-pref";
const prefersDarkMQ = "(prefers-color-scheme: dark)";

interface ThemeContextValues {
  userTheme: UserTheme;
  setUserTheme: (userTheme: UserTheme) => void;
}

export const ThemeContext = createContext<ThemeContextValues>({
  userTheme: null,
  setUserTheme: () => {},
});

const getPreferredTheme = () =>
  window.matchMedia(prefersDarkMQ).matches ? "dark" : "light";

/**
 * Because ThemeProvider is not available in the root of the app, we need to
 * use this hook to set the theme there.
 */
export const useSpecifiedTheme = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTheme = searchParams.get("theme") as UserTheme;
  return {
    specifiedTheme: searchTheme || getPreferredTheme(),
    setSpecifiedTheme: (theme: Theme) => {
      if (theme !== searchTheme) {
        searchParams.set("theme", theme);
        setSearchParams(searchParams, { replace: true });
      }
    },
  };
};

export function ThemeProvider({
  children,
  specifiedTheme,
}: {
  children: ReactNode;
  specifiedTheme?: UserTheme;
}) {
  const [userTheme, setUserTheme] = useState<UserTheme | null>(() => {
    // if a theme is specified, use that
    if (specifiedTheme === "dark" || specifiedTheme === "light") {
      return specifiedTheme;
    } else {
      return null;
    }
  });

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchTheme = searchParams.get("theme") as UserTheme;
    if (userTheme && userTheme !== searchTheme) {
      searchParams.set("theme", userTheme);
      setSearchParams(searchParams, { replace: true });
    }
  }, [userTheme, searchParams]);

  // Event listener for dark mode changes
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(prefersDarkMQ);

    const handleModeChange = (_e: MediaQueryListEvent) => {
      setUserTheme(darkModeMediaQuery.matches ? "dark" : "light");
    };

    darkModeMediaQuery.addEventListener("change", handleModeChange);

    return () =>
      darkModeMediaQuery.removeEventListener("change", handleModeChange);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        userTheme,
        setUserTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
