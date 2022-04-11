import React from "react";
import { Currency } from "../currency/currency";

const formatCurrencyItem = (name: string, symbol: string) =>
  `${name?.replace(/(.{16})..+/, "$1…")} (${symbol})`;

export const CurrencySelect: React.FC<{
  currencies: Currency[];
  inputRef: React.RefObject<HTMLSelectElement>;
}> = ({ currencies, inputRef }) => {
  const DEFAULT_FAVORITE_CURRENCY_CODES = ["USD", "CAD", "EUR"];

  const favoriteCurrencies = DEFAULT_FAVORITE_CURRENCY_CODES.map(
    (defaultCurrency) => {
      return currencies.find((currency) => currency.code === defaultCurrency);
    }
  ).filter(Boolean);

  const renderCurrencyItem = (currency: Currency | undefined) => {
    if (!currency) return null;

    const { code, name, symbol } = currency;
    return (
      <option key={code} value={code}>
        {formatCurrencyItem(name, symbol)}
      </option>
    );
  };

  return (
    <select id="currency" ref={inputRef} defaultValue="CAD">
      {favoriteCurrencies.map(renderCurrencyItem)}
      <option disabled>──────────</option>
      {currencies.map(renderCurrencyItem)}
    </select>
  );
};
