import { createCookieSessionStorage } from "@remix-run/node";

import type { UserTheme } from "~/components/ThemeProvider/ThemeProvider";
import { themeKey } from "~/components/ThemeProvider/ThemeProvider";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

export function isUserTheme(value: unknown): value is UserTheme {
  return typeof value === "string" && ["dark", "light"].includes(value);
}

const themeStorage = createCookieSessionStorage({
  cookie: {
    name: themeKey,
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true,
  },
});

export async function getUserThemeSession(request: Request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const modeValue = session.get("userTheme");
      return isUserTheme(modeValue) ? modeValue : null;
    },
    setTheme: (mode: UserTheme) => {
      session.set("userTheme", mode);
    },
    commit: () => themeStorage.commitSession(session),
  };
}
