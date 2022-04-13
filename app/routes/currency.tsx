import { json, LinksFunction, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import {
  CurrencyConverter,
  links as currencyConverterStyles,
} from "~/modules/currency-converter/currency-converter.component";
import { Currency } from "~/modules/currency/currency";
import { selectAvailableCurrenciesFromRates } from "~/modules/currency/currency.server";
import { fetchRates } from "~/modules/exchange-rates/exchange-rates.server";

export const links: LinksFunction = () => {
  return [...currencyConverterStyles()];
};

export const loader: LoaderFunction = async () => {
  const rates = await fetchRates();
  const currencies = selectAvailableCurrenciesFromRates(rates);

  return json({ rates, currencies });
};

export default () => {
  const { rates, currencies } = useLoaderData<{
    rates: Record<string, number>;
    currencies: Currency[];
  }>();

  return <CurrencyConverter rates={rates} currencies={currencies} />;
};
