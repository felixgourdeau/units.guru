import React from "react";
import { useLocalStorage } from "usehooks-ts";
import { DEFAULT_VALUES } from "~/constants";
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

export const CurrencySelect: React.FC<{
  id: string;
  currencies: Currency[];
  inputRef: React.RefObject<HTMLSelectElement>;
}> = ({ currencies, inputRef, id }) => {
  const [selectedCurrency, setSelectedCurrency] = useLocalStorage<string>(
    id,
    DEFAULT_VALUES[id]
  );

  const [favoriteCurrencyCodes, setFavoriteCurrencyCodes] = useLocalStorage<
    Array<string>
  >("favorite-currency-codes", DEFAULT_VALUES["favorite-currency-codes"]);

  const appendFavoriteCurrencyCode = (code: string) => {
    if (favoriteCurrencyCodes?.includes(code)) return;
    setFavoriteCurrencyCodes([...favoriteCurrencyCodes, code]);
  };

  const favoriteCurrencies = DEFAULT_VALUES["favorite-currency-codes"]
    ?.map((defaultCurrency) => {
      return currencies.find((currency) => currency.code === defaultCurrency);
    })
    .filter(Boolean);

  React.useEffect(() => {
    if (inputRef.current?.value && selectedCurrency)
      inputRef.current.value = selectedCurrency;
  }, [selectedCurrency, inputRef]);

  console.log("selectedCurrency", id, selectedCurrency);

  return (
    <select
      id={id}
      ref={inputRef}
      //defaultValue={DEFAULT_VALUES[id]}
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
