import React from "react";
import { formatPrice } from "./currency-input.selector";

export const CurrencyInput: React.FC<{
  inputRef: React.RefObject<HTMLInputElement>;
  decimals: number;
  disabled?: boolean;
  defaultValue: string;
}> = ({ inputRef, decimals, disabled, defaultValue }) => {
  return (
    <input
      disabled={disabled}
      type="number"
      id="price"
      ref={inputRef}
      defaultValue={defaultValue}
      onBlur={(event) => {
        if (inputRef.current)
          inputRef.current.value = formatPrice(event.target.value, decimals);
      }}
    />
  );
};
