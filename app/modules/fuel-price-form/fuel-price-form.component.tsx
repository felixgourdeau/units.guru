import React from "react";
import { Form } from "remix";
import { FuelPriceFormFieldRefs } from "../fuel-price-converter/fuel-price-converter";

import { CurrencyInput } from "~/modules/currency-input/currency-input.component";
import { CurrencySelect } from "~/modules/currency-select/currency-select.component";
import { Currency } from "~/modules/currency/currency";
import { VolumeSelect } from "~/modules/volume-select/volume-select.component";
import { selectDecimalsFromCurrency } from "./fuel-price-form.selector";

export const FuelPriceForm: React.FC<{
  currencies: Currency[];
  formFieldRefs: FuelPriceFormFieldRefs;
  onChangeCallback: () => void;
  type: "source" | "destination";
}> = ({ currencies, formFieldRefs, onChangeCallback, type }) => {
  const { priceRef, currencyRef, volumeRef } = formFieldRefs;

  const decimals = selectDecimalsFromCurrency(
    currencyRef.current?.value,
    currencies
  );

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
        <VolumeSelect id={`selected-volume-${type}`} inputRef={volumeRef} />
      </div>
    </Form>
  );
};
