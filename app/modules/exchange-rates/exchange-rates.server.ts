import mockedRates from "~/statics/json/mocked-rates.json";

import { ExchangeRates } from "./exchange-rates";

export const fetchRates = async () => {
  //const exchangeRatesResponse = await fetch(
  //  "https://api.exchangerate.host/latest?base=USD"
  //);
  //const { rates } = (await exchangeRatesResponse.json()) as ExchangeRates;
  ////console.log(JSON.stringify(rates)); mocked-rates.json

  const rates: ExchangeRates["rates"] = mockedRates;

  return rates;
};
