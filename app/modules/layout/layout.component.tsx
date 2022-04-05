import { GithubCorner } from "~/modules/github-corner/github-corner.component";

import styles from "./layout.styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="header">units &#x1f913; guru</div>
      <GithubCorner url="https://felixgourdeau.ca" />
      <nav>
        <a href="/gas/">Gas price</a> |<a href="/currency/">Currency</a> |
        <a href="/about/">About</a>
      </nav>
      <main>{children}</main>
      <footer>
        <p>© 2022 Félix Gourdeau Inc. All Rights Reserved.</p>
      </footer>
    </>
  );
};
