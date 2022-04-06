import { Link } from "remix";
import { GithubCorner } from "~/modules/github-corner/github-corner.component";

import styles from "./layout.styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="header">units &#x1f913; guru</div>
      <GithubCorner url="https://github.com/felixgourdeau/unitsguru" />
      <nav>
        <Link prefetch="render" to="/gas">
          Gas price
        </Link>{" "}
        |{" "}
        <Link prefetch="render" to="/currency">
          Currency
        </Link>{" "}
        |{" "}
        <Link prefetch="render" to="/about">
          About
        </Link>
      </nav>
      <main>{children}</main>
      <footer>
        <p>© 2022 Félix Gourdeau Inc. All Rights Reserved.</p>
      </footer>
    </>
  );
};
