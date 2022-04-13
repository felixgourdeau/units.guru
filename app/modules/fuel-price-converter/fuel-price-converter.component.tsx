import React from "react";

import { formatPrice } from "~/modules//currency-input/currency-input.selector";
import { Currency } from "~/modules//currency/currency";
import { ExchangeRates } from "~/modules/exchange-rates/exchange-rates";
import { FuelPriceForm } from "~/modules/fuel-price-form/fuel-price-form.component";

import {
  getDestinationFuelPrice,
  selectValuesFromFormFieldsRef,
  swapForm,
} from "./fuel-price-converter.selector";
import styles from "./fuel-price-converter.styles.css";

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
    const {
      sourcePrice,
      sourceCurrency,
      sourceVolume,
      destinationCurrency,
      destinationVolume,
    } = selectValuesFromFormFieldsRef(inputFieldRefs, outputFieldRefs);

    const outputPrice = getDestinationFuelPrice({
      sourcePrice,
      sourceCurrency,
      sourceVolume,
      destinationCurrency,
      destinationVolume,
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

      <button
        className="arrow"
        onClick={() => swapForm(inputFieldRefs, outputFieldRefs)}
      >
        &#8646;
      </button>

      <FuelPriceForm
        currencies={currencies}
        formFieldRefs={outputFieldRefs}
        onChangeCallback={onFormChange}
        type="destination"
      />
    </div>
  );
};
