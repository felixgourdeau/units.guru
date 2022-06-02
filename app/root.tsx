import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import type {
  MetaFunction,
  LinksFunction,
} from "@remix-run/react/routeModules";

import styles from "app/styles/main.css";
import { links as githubCornerStyles } from "~/modules/github-corner/github-corner.component";
import {
  Layout,
  links as layoutStyles,
} from "~/modules/layout/layout.component";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "units.guru",
  viewport: "width=device-width,initial-scale=1",
  description: "Unit converter tool",
});

export const links: LinksFunction = () => {
  return [
    ...githubCornerStyles(),
    ...layoutStyles(),
    { rel: "stylesheet", href: styles },
    { rel: "manifest", href: "_static/app.webmanifest" },
    {
      rel: "icon",
      href: "/_static/favicon.ico",
      type: "image/png",
    },
  ];
};

const Document: React.FC = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <Layout>
        <div className="error-container">
          <h1>Error</h1>
          <pre>{error.message}</pre>
        </div>
      </Layout>
    </Document>
  );
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
