import React from "react";

import { Currency } from "./fuel-price-converter";
import { getDestinationFuelPrice } from "./fuel-price-converter.selector";
import { FuelPriceForm } from "../fuel-price-form/fuel-price-form.component";

import styles from "./fuel-price-converter.styles.css";
import { ExchangeRates } from "~/routes/gas";
import { formatPrice } from "../currency-input/currency-input.selector";

export const links = () => [{ rel: "stylesheet", href: styles }];

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

  const onFormChange = () => {
    const outputPrice = getDestinationFuelPrice({
      sourcePrice: inputFieldRefs.priceRef.current?.value,
      sourceCurrency: inputFieldRefs.currencyRef.current?.value,
      destinationCurrency: outputFieldRefs.currencyRef.current?.value,
      sourceVolume: inputFieldRefs.volumeRef.current?.value,
      destinationVolume: outputFieldRefs.volumeRef.current?.value,
      rates,
    });

    const currentDecimal = currencies.find(
      (currency) => currency.code === outputFieldRefs.currencyRef.current?.value
    );

    const result = formatPrice(
      outputPrice ? `${outputPrice}` : "",
      currentDecimal?.dec ?? 2
    );

    if (outputFieldRefs.priceRef.current)
      outputFieldRefs.priceRef.current.value = result;
  };

  React.useEffect(() => {
    inputFieldRefs.currencyRef.current.value = "CAD";
    outputFieldRefs.currencyRef.current.value = "USD";
    inputFieldRefs.volumeRef.current.value = "L";
    outputFieldRefs.volumeRef.current.value = "GAL";
    inputFieldRefs.priceRef.current.value = "1";
    onFormChange();
  });

  return (
    <div className="formContainer">
      <FuelPriceForm
        currencies={currencies}
        formFieldRefs={inputFieldRefs}
        onChangeCallback={onFormChange}
        type="source"
      />
      <div className="arrow">&#8594;</div>
      <FuelPriceForm
        currencies={currencies}
        formFieldRefs={outputFieldRefs}
        onChangeCallback={onFormChange}
        type="destination"
      />
    </div>
  );
};
