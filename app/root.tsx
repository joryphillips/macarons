import { cssBundleHref } from "@remix-run/css-bundle";
import { json, type LinksFunction, type LoaderArgs } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/react";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import clsx from "clsx";
import "~/styles/global.css";
import { NonFlashOfWrongThemeEls } from "./components/ThemeProvider/ThemeProvider";
import { Alert, Box } from "./components/ui";
import { getUserThemeSession } from "./theme/themeSession.server";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const meta: V2_MetaFunction = () => {
  return [{ title: "ssrs-ui-components" }];
};

export const loader = async ({ request }: LoaderArgs) => {
  const response = new Response();
  const themeSession = await getUserThemeSession(request);
  const theme = themeSession.getTheme();
  return json(
    {
      theme,
    },
    {
      headers: response.headers,
    }
  );
};

export default function App() {
  const data = useLoaderData<typeof loader>();
  const theme = data?.theme ?? null;

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <NonFlashOfWrongThemeEls ssrTheme={true} />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  console.error(error);

  if (isRouteErrorResponse(error)) {
    return <Alert status="error">{error.data.message}</Alert>;
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <NonFlashOfWrongThemeEls ssrTheme={true} />
        <Links />
      </head>
      <body>
        <Box height="100vh" padding={1}>
          <Alert status="error">An unexpected error has occured.</Alert>
        </Box>
      </body>
    </html>
  );
}
