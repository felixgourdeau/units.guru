import React from "react";
import { Form } from "remix";
import {
  Currency,
  FormFieldRefs,
} from "../fuel-price-converter/fuel-price-converter";
import { VOLUME_UNITS } from "../fuel-price-converter/fuel-price-converter.constant";
import { CurrencyInput } from "../currency-input/currency-input.component";
import { CurrencySelect } from "../currency-select/currency-select.component";

export const FuelPriceForm: React.FC<{
  currencies: Currency[];
  formFieldRefs: FormFieldRefs;
  onChangeCallback: () => void;
  type: "source" | "destination";
}> = ({ currencies, formFieldRefs, onChangeCallback, type }) => {
  const { priceRef, currencyRef, volumeRef } = formFieldRefs;

  const currency = currencies.find(
    (currency) => currency.code === currencyRef.current?.value
  );
  const decimals = currency?.dec ?? 2;

  return (
    <Form onChange={onChangeCallback} className="row">
      <CurrencyInput
        inputRef={priceRef}
        decimals={decimals}
        disabled={type === "destination"}
      />

      <div className="cell">
        <CurrencySelect inputRef={currencyRef} currencies={currencies} />

        <select id="volume" ref={volumeRef}>
          {VOLUME_UNITS.map(({ abbreviation, name }) => (
            <option key={abbreviation} value={abbreviation}>
              {`${name}`}
            </option>
          ))}
        </select>
      </div>
    </Form>
  );
};
