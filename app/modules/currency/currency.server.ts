import { ExchangeRates } from "../exchange-rates/exchange-rates";
import { Currency } from "./currency";

import currencyData from "~/statics/json/currency-data.json";

export const selectAvailableCurrenciesFromRates = (
  rates: ExchangeRates["rates"]
) => {
  return Object.keys(rates)
    .map((currencyAbbreviation): Currency | undefined => {
      const data = currencyData.find(
        (entry) => entry.code === currencyAbbreviation
      );

      if (!data) return undefined;

      const { code, symbol, name, dec } = data || {};
      return { code, symbol, name, dec };
    })
    .filter(Boolean);
};
