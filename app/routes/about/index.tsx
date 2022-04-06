import React from "react";
import { Link } from "remix";

export default () => {
  return (
    <Link prefetch="render" to="https://www.feligourdeau.ca">
      felixgourdeau.ca
    </Link>
  );
};
