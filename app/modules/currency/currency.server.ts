import { ExchangeRates } from "~/modules/exchange-rates/exchange-rates";
import currencyData from "~/statics/json/currency-data.json";

import { Currency } from "./currency";

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
