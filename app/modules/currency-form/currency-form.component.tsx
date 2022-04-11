import React from "react";
import { Form } from "remix";
import { FuelPriceFormFieldRefs } from "../fuel-price-converter/fuel-price-converter";

import { CurrencyInput } from "../currency-input/currency-input.component";
import { CurrencySelect } from "../currency-select/currency-select.component";
import { Currency } from "../currency/currency";

export const CurrencyForm: React.FC<{
  currencies: Currency[];
  formFieldRefs: FuelPriceFormFieldRefs;
  onChangeCallback: () => void;
  type: "source" | "destination";
}> = ({ currencies, formFieldRefs, onChangeCallback, type }) => {
  const { priceRef, currencyRef } = formFieldRefs;

  const currency = currencies.find(
    (currency) => currency.code === currencyRef.current?.value
  );
  const decimals = currency?.dec ?? 2;

  return (
    <Form onChange={onChangeCallback} className="row">
      <CurrencyInput
        inputRef={priceRef}
        decimals={decimals}
        defaultValue={"1"}
        disabled={type === "destination"}
      />

      <div className="cell">
        <CurrencySelect
          id={`selected-currency-${type}`}
          inputRef={currencyRef}
          currencies={currencies}
        />
      </div>
    </Form>
  );
};
