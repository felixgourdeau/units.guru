import React, { useEffect, useState, FC, RefObject } from "react";

import { useLocalStorage } from "usehooks-ts";

import { DEFAULT_FAVORITE_CURRENCY_CODES, DEFAULT_VALUES } from "~/constants";
import { Currency } from "~/modules/currency/currency";

const formatCurrencyItem = (name: string, symbol: string) =>
  `${name?.replace(/(.{16})..+/, "$1…")} (${symbol})`;

const renderCurrencyItem = (currency: Currency | undefined) => {
  if (!currency) return null;

  const { code, name, symbol } = currency;
  return (
    <option key={code} value={code}>
      {formatCurrencyItem(name, symbol)}
    </option>
  );
};

export const CurrencySelect: FC<{
  id: string;
  currencies: Currency[];
  inputRef: RefObject<HTMLSelectElement>;
}> = ({ currencies, inputRef, id }) => {
  const [selectedCurrency, setSelectedCurrency] = useLocalStorage<string>(
    id,
    DEFAULT_VALUES[id]
  );

  const [savedFavoriteCurrencyCodes, setSavedFavoriteCurrencyCodes] =
    useLocalStorage<Array<string>>(
      "favorite-currency-codes",
      DEFAULT_FAVORITE_CURRENCY_CODES
    );

  const [favoriteCurrencyCodes, setFavoriteCurrencyCodes] = useState<string[]>(
    []
  );

  const appendFavoriteCurrencyCode = (code: string) => {
    if (favoriteCurrencyCodes?.includes(code)) return;
    setSavedFavoriteCurrencyCodes([...favoriteCurrencyCodes, code]);
    setFavoriteCurrencyCodes([...favoriteCurrencyCodes, code]);
  };

  const favoriteCurrencies = favoriteCurrencyCodes
    .map((defaultCurrency) => {
      return currencies.find((currency) => currency.code === defaultCurrency);
    })
    .filter(Boolean);

  useEffect(() => {
    setFavoriteCurrencyCodes(savedFavoriteCurrencyCodes);
  }, [savedFavoriteCurrencyCodes]);

  React.useEffect(() => {
    if (
      inputRef.current?.value &&
      selectedCurrency &&
      savedFavoriteCurrencyCodes
    )
      inputRef.current.value = selectedCurrency;
  }, [selectedCurrency, inputRef, savedFavoriteCurrencyCodes]);

  return (
    <select
      id={id}
      ref={inputRef}
      onChange={(event) => {
        setSelectedCurrency(event.target.value);
        appendFavoriteCurrencyCode(event.target.value);
      }}
    >
      {favoriteCurrencies?.map(renderCurrencyItem)}
      <option disabled key="separator" value="separator">
        ──────────
      </option>
      {currencies.map(renderCurrencyItem)}
    </select>
  );
};
