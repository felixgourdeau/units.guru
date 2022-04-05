import React from "react";

import { ExchangeRates } from "~/routes";
import { Currency } from "./fuel-price-converter";
import {
  getDestinationFuelPrice,
  formatPrice,
} from "./fuel-price-converter.selector";
import { FuelPriceForm } from "../fuel-price-form/fuel-price-form.component";

import styles from "./fuel-price-converter.styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

const getItem = (key: string) => {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.log(error);
    return null;
  }
};

//const usePersistentState = (key: string, defaultValue: string) => {};

export const FuelPriceConverter: React.FC<{
  currencies: Currency[];
  rates: ExchangeRates["rates"];
}> = ({ currencies, rates }) => {
  const inputFieldRefs = {
    priceRef: React.useRef<HTMLInputElement>(null),
    currencyRef: React.useRef<HTMLSelectElement>(null),
    volumeRef: React.useRef<HTMLSelectElement>(null),
  };

  const outputFieldRefs = {
    priceRef: React.useRef<HTMLInputElement>(null),
    currencyRef: React.useRef<HTMLSelectElement>(null),
    volumeRef: React.useRef<HTMLSelectElement>(null),
  };

  const onFormChange = (form: "input" | "output") => () => {
    if (form === "input") {
      const outputPrice = getDestinationFuelPrice({
        sourcePrice: inputFieldRefs.priceRef.current?.value,
        sourceCurrency: inputFieldRefs.currencyRef.current?.value,
        destinationCurrency: outputFieldRefs.currencyRef.current?.value,
        sourceVolume: inputFieldRefs.volumeRef.current?.value,
        destinationVolume: outputFieldRefs.volumeRef.current?.value,
        rates,
      });

      const currentDecimal = currencies.find(
        (currency) =>
          currency.code === outputFieldRefs.currencyRef.current?.value
      );

      if (outputFieldRefs.priceRef.current)
        outputFieldRefs.priceRef.current.value = formatPrice(
          outputPrice ? `${outputPrice}` : "",
          currentDecimal?.dec ?? 2
        );
    } else {
      const outputPrice = getDestinationFuelPrice({
        sourcePrice: outputFieldRefs.priceRef.current?.value,
        sourceCurrency: outputFieldRefs.currencyRef.current?.value,
        destinationCurrency: inputFieldRefs.currencyRef.current?.value,
        sourceVolume: outputFieldRefs.volumeRef.current?.value,
        destinationVolume: inputFieldRefs.volumeRef.current?.value,
        rates,
      });

      const currentDecimal = currencies.find(
        (currency) =>
          currency.code === inputFieldRefs.currencyRef.current?.value
      );

      if (inputFieldRefs.priceRef.current)
        inputFieldRefs.priceRef.current.value = formatPrice(
          outputPrice ? `${outputPrice}` : "",
          currentDecimal?.dec ?? 2
        );
    }
  };

  const DEFAULT_FAVORITE_CODES = ["USD", "CAD", "EUR"];

  const [favoriteCodes, setFavoriteCodes] = React.useState<string[]>([]);

  const getSavedFavoriteCode = () => {
    try {
      return JSON.parse(getItem("favorite_codes") || "");
    } catch (error) {
      return null;
    }
  };

  //hook idea: use-persistent-state hook like useState but persist in localstorage

  React.useEffect(() => {
    const savedFavoriteCodes = getSavedFavoriteCode();
    console.log({ savedFavoriteCodes });
    setFavoriteCodes(savedFavoriteCodes || DEFAULT_FAVORITE_CODES);
  }, []);

  const favoriteCurrencies = favoriteCodes
    .map((defaultCurrency) => {
      return currencies.find((currency) => currency.code === defaultCurrency);
    })
    .filter(Boolean);

  console.log({ favoriteCurrencies });

  React.useEffect(() => {
    inputFieldRefs.currencyRef.current.value = "CAD";
    outputFieldRefs.currencyRef.current.value = "USD";
    //const savedFavoriteCurrencies = getItem;
    //JSON.parse(window.localStorage.getItem("favoriteCurrencies") || "") ||
    //  DEFAULT_FAVORITES_CURRENCIES;
    //setFavoriteCurrencies(savedFavoriteCurrencies);
  }, []);

  return (
    <div className="formContainer">
      <FuelPriceForm
        currencies={currencies}
        favoriteCurrencies={favoriteCurrencies}
        formFieldRefs={inputFieldRefs}
        onChangeCallback={onFormChange("input")}
      />
      <div className="arrow">&#x2194;</div>
      <FuelPriceForm
        currencies={currencies}
        favoriteCurrencies={favoriteCurrencies}
        formFieldRefs={outputFieldRefs}
        onChangeCallback={onFormChange("output")}
      />
    </div>
  );
};
