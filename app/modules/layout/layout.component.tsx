import { NavLink } from "@remix-run/react";

import { GithubCorner } from "~/modules/github-corner/github-corner.component";

import styles from "./layout.styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="header">units &#x1f913; guru</div>
      <GithubCorner url="https://github.com/felixgourdeau/unitsguru" />
      <nav>
        <NavLink
          prefetch="render"
          to="/fuel"
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
        >
          Fuel price
        </NavLink>{" "}
        |{" "}
        <NavLink
          prefetch="render"
          to="/currency"
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
        >
          Currency
        </NavLink>{" "}
        |{" "}
        <NavLink
          prefetch="render"
          to="/about"
          className={({ isActive }) => (isActive ? "activeNav" : undefined)}
        >
          About
        </NavLink>
      </nav>
      <main>{children}</main>
      <footer>
        <p>© 2022 Félix Gourdeau Inc. All Rights Reserved.</p>
      </footer>
    </>
  );
};
