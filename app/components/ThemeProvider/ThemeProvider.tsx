import { useFetcher } from "@remix-run/react";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useRef, useState } from "react";

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
 * NOTE: If the user specifies the theme, and their device changes that
 * preference while they are away from the site, the theme they chose will
 * be the one that shows when they return.
 */
export function ThemeProvider({
  children,
  specifiedTheme,
}: {
  children: ReactNode;
  specifiedTheme?: UserTheme;
}) {
  const [userTheme, setUserTheme] = useState<UserTheme | null>(() => {
    // if a theme is specified, use that
    if (specifiedTheme) {
      if (specifiedTheme === "dark" || specifiedTheme === "light") {
        return specifiedTheme;
      } else {
        return null;
      }
    }

    // there's no way for us to know what the theme should be in this context
    // the client will have to figure it out before hydration.
    if (typeof document === "undefined") {
      return null;
    }

    return getPreferredTheme();
  });

  const persistTheme = useFetcher();
  const persistThemeRef = useRef(persistTheme);

  useEffect(() => {
    persistThemeRef.current = persistTheme;
  }, [persistTheme]);

  const mountRun = useRef(false);
  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!userTheme) {
      return;
    }

    persistThemeRef.current.submit(
      { userTheme },
      { action: "/api/set-theme", method: "post" }
    );
  }, [userTheme]);

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

const clientThemeCode = `
;(() => {
  const theme = window.matchMedia(${JSON.stringify(prefersDarkMQ)}).matches
    ? 'dark'
    : 'light';
  const cl = document.documentElement.classList;
  const themeAlreadyApplied = cl.contains('dark');
  if (themeAlreadyApplied) {
    console.warn(
      "this script shouldn't exist if the theme is already applied",
    );
  } else {
    cl.add(theme);
  }
})();
`;

export function NonFlashOfWrongThemeEls({ ssrTheme }: { ssrTheme: boolean }) {
  return (
    <>
      {ssrTheme ? null : (
        <script dangerouslySetInnerHTML={{ __html: clientThemeCode }} />
      )}
    </>
  );
}
