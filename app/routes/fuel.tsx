import React from "react";

import { json, LinksFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import { FuelPriceConverter } from "~/modules/fuel-price-converter/fuel-price-converter.component";
import { fetchRates } from "~/modules/exchange-rates/exchange-rates.server";
import { Currency } from "~/modules/currency/currency";
import { selectAvailableCurrenciesFromRates } from "~/modules/currency/currency.server";

import { links as fuelPriceConverterStyles } from "~/modules/fuel-price-converter/fuel-price-converter.component";

export const links: LinksFunction = () => {
  return [...fuelPriceConverterStyles()];
};

export const loader: LoaderFunction = async () => {
  const rates = await fetchRates();
  const currencies = selectAvailableCurrenciesFromRates(rates);

  //throw new Error("Testing Error Boundary");

  return json({ rates, currencies });
};

export default () => {
  const { rates, currencies } = useLoaderData<{
    rates: Record<string, number>;
    currencies: Currency[];
  }>();

  return <FuelPriceConverter rates={rates} currencies={currencies} />;
};
