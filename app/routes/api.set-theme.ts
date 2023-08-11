import type { ActionFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUserThemeSession, isUserTheme } from "~/theme/themeSession.server";

export const action: ActionFunction = async ({ request }) => {
  const themeSession = await getUserThemeSession(request);
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);
  const theme = form.get("userTheme");

  if (!isUserTheme(theme)) {
    return json({
      success: false,
      message: `theme value of ${theme} is not a valid theme`,
    });
  }

  themeSession.setTheme(theme);
  return json(
    { success: true },
    { headers: { "Set-Cookie": await themeSession.commit() } }
  );
};
