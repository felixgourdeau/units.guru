import React from "react";

import { json, useCatch, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import currencyData from "~/statics/json/currency-data.json";
import mockedRates from "~/statics/json/mocked-rates.json";

import { FuelPriceConverter } from "~/modules/fuel-price-converter/fuel-price-converter.component";
import { Currency } from "~/modules/fuel-price-converter/fuel-price-converter";

export interface ExchangeRates {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export const loader: LoaderFunction = async () => {
  //const exchangeRatesResponse = await fetch(
  //  "https://api.exchangerate.host/latest?base=USD"
  //);
  //const { rates } = (await exchangeRatesResponse.json()) as ExchangeRates;
  ////console.log(JSON.stringify(rates)); mocked-rates.json

  const rates: ExchangeRates["rates"] = mockedRates;

  const currencies = Object.keys(rates)
    .map((currencyAbbreviation): Currency | undefined => {
      const data = currencyData.find(
        (entry) => entry.code === currencyAbbreviation
      );

      if (!data) return undefined;

      const { code, symbol, name, dec, unit } = data || {};
      return { code, symbol, name, dec, unit: unit || "L" };
    })
    .filter(Boolean);

  return json({ rates, currencies });
};

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div className="error-container">
      <h1>
        {caught.status} {caught.statusText}
      </h1>
    </div>
  );
}

export default () => {
  const { rates, currencies } = useLoaderData<{
    rates: Record<string, number>;
    currencies: Currency[];
  }>();

  return <FuelPriceConverter rates={rates} currencies={currencies} />;
};
