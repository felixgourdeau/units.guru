import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  useCatch,
} from "remix";
import type { MetaFunction } from "remix";

import { links as githubCornerStyles } from "~/modules/github-corner/github-corner.component";
import {
  Layout,
  links as layoutStyles,
} from "~/modules/layout/layout.component";
import { links as fuelPriceConverterStyles } from "~/modules/fuel-price-converter/fuel-price-converter.component";
import styles from "app/styles/main.css";

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
    ...fuelPriceConverterStyles(),
    { rel: "stylesheet", href: styles },
    { rel: "manifest", href: "app.webmanifest" },
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

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <Layout>
        <div className="error-container">
          <h1>
            {caught.status} {caught.statusText}
          </h1>
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
