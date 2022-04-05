import React from "react";

import { json, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import styles from "app/styles/main.css";

import { links as githubCornerStyles } from "~/modules/github-corner/github-corner.component";
import {
  Layout,
  links as layoutStyles,
} from "~/modules/layout/layout.component";
import { links as fuelPriceConverterStyles } from "~/modules/fuel-price-converter/fuel-price-converter.component";

import currencyData from "~/statics/json/currency-data.json";
//import mockedRates from "~/statics/json/mocked-rates.json";

import { FuelPriceConverter } from "~/modules/fuel-price-converter/fuel-price-converter.component";
import { Currency } from "~/modules/fuel-price-converter/fuel-price-converter";

export interface ExchangeRates {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export const links = () => {
  return [
    ...githubCornerStyles(),
    ...layoutStyles(),
    ...fuelPriceConverterStyles(),
    { rel: "stylesheet", href: styles },
    { rel: "manifest", href: "manifest.json" },
  ];
};

export const loader: LoaderFunction = async () => {
  const exchangeRatesResponse = await fetch(
    "https://api.exchangerate.host/latest?base=USD"
  );
  const { rates } = (await exchangeRatesResponse.json()) as ExchangeRates;
  ////console.log(JSON.stringify(rates)); mocked-rates.json

  //const rates: ExchangeRates["rates"] = mockedRates;

  const currencies = Object.keys(rates)
    .map((currencyAbbreviation): Currency | undefined => {
      const data = currencyData.find(
        (entry) => entry.code === currencyAbbreviation
      );

      if (!data) return undefined;

      const { code, symbol, name, dec } = data || {};
      return { code, symbol, name, dec };
    })
    .filter(Boolean);

  return json({ rates, currencies });
};

export default () => {
  const { rates, currencies } = useLoaderData<{
    rates: Record<string, number>;
    currencies: Currency[];
  }>();

  return (
    <Layout>
      <FuelPriceConverter rates={rates} currencies={currencies} />
    </Layout>
  );
};
