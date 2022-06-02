import React from "react";

import { formatPrice } from "~/modules//currency-input/currency-input.selector";
import { CurrencyForm } from "~/modules/currency-form/currency-form.component";
import type { Currency } from "~/modules/currency/currency";
import type { ExchangeRates } from "~/modules/exchange-rates/exchange-rates";

import {
  getDestinationPrice,
  selectValuesFromFormFieldsRef,
  swapForm,
} from "./currency-converter.selector";
import styles from "./currency-converter.styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const CurrencyConverter: React.FC<{
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
    const { sourcePrice, sourceCurrency, destinationCurrency } =
      selectValuesFromFormFieldsRef(inputFieldRefs, outputFieldRefs);

    const outputPrice = getDestinationPrice({
      sourcePrice,
      sourceCurrency,
      destinationCurrency,
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
      <CurrencyForm
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

      <CurrencyForm
        currencies={currencies}
        formFieldRefs={outputFieldRefs}
        onChangeCallback={onFormChange}
        type="destination"
      />
    </div>
  );
};
