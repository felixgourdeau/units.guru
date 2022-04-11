import React from "react";

import { VOLUME_UNITS } from "./volume-select.constant";

export const VolumeSelect: React.FC<{
  inputRef: React.RefObject<HTMLSelectElement>;
  defaultValue: string;
}> = ({ inputRef, defaultValue }) => {
  return (
    <select id="volume" ref={inputRef} defaultValue={defaultValue}>
      {VOLUME_UNITS.map(({ abbreviation, name }) => (
        <option key={abbreviation} value={abbreviation}>
          {`${name}`}
        </option>
      ))}
    </select>
  );
};

/*



*/
