import type { ExchangeRates } from "./exchange-rates";

export const fetchRates = async () => {
  const exchangeRatesResponse = await fetch(
    "https://api.exchangerate.host/latest?base=USD"
  );
  const { rates } = (await exchangeRatesResponse.json()) as ExchangeRates;

  return rates;
};
