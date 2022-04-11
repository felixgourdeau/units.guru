import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { DEFAULT_VALUES } from "~/constants";

import { VOLUME_UNITS } from "./volume-select.constant";

export const VolumeSelect: React.FC<{
  inputRef: React.RefObject<HTMLSelectElement>;
  id: string;
}> = ({ inputRef, id }) => {
  const [selectedVolume, setSelectedVolume] = useLocalStorage<string>(
    id,
    DEFAULT_VALUES[id]
  );

  React.useEffect(() => {
    if (inputRef.current?.value) inputRef.current.value = selectedVolume;
  }, []);

  return (
    <select
      id={id}
      ref={inputRef}
      onChange={(event) => {
        setSelectedVolume(event.target.value);
      }}
    >
      {VOLUME_UNITS.map(({ abbreviation, name }) => (
        <option key={abbreviation} value={abbreviation}>
          {`${name}`}
        </option>
      ))}
    </select>
  );
};
