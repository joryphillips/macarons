import { type LinksFunction } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import "~/styles/global.css";
import { useSpecifiedTheme } from "./components/ThemeProvider/ThemeProvider";

import { Alert, Box, Spinner } from "./components/ui";

export const links: LinksFunction = () => [
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  {
    rel: "icon",
    sizes: "32x32",
    type: "image/png",
    href: "/favicon-32x32.png",
  },
  {
    rel: "icon",
    sizes: "16x16",
    type: "image/png",
    href: "/favicon-16x16.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
];

export const meta: MetaFunction = () => {
  return [{ title: "macarons-ui" }];
};

export default function App() {
  const { specifiedTheme } = useSpecifiedTheme();

  return (
    <html lang="en" className={specifiedTheme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
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

export function HydrateFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "4rem",
          }}
        >
          <Spinner color="hsl(322, 75%, 44%)" />
        </div>
        <Scripts />
      </body>
    </html>
  );
}
