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

/*

  const DEFAULT_FAVORITE_CODES = ["USD", "CAD", "EUR"];

  const [favoriteCodes, setFavoriteCodes] = React.useState<string[]>([]);

  const getSavedFavoriteCode = () => {
    try {
      return JSON.parse(getItem("favorite_codes") || "");
    } catch (error) {
      return null;
    }
  };

  //hook idea: use-persistent-state hook like useState but persist in localstorage

  React.useEffect(() => {
    const savedFavoriteCodes = getSavedFavoriteCode();
    console.log({ savedFavoriteCodes });
    setFavoriteCodes(savedFavoriteCodes || DEFAULT_FAVORITE_CODES);
  }, []);

  const favoriteCurrencies = favoriteCodes
    .map((defaultCurrency) => {
      return currencies.find((currency) => currency.code === defaultCurrency);
    })
    .filter(Boolean);

  console.log({ favoriteCurrencies });

  const getItem = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.log(error);
    return null;
  }
};

*/
