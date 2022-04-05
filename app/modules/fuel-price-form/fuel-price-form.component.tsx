import React from "react";
import { Form } from "remix";
import {
  Currency,
  FormFieldRefs,
} from "../fuel-price-converter/fuel-price-converter";
import { VOLUME_UNITS } from "../fuel-price-converter/fuel-price-converter.constant";
import { formatPrice } from "../fuel-price-converter/fuel-price-converter.selector";

const formatCurrencyItem = (name: string, symbol: string) =>
  `${name?.replace(/(.{16})..+/, "$1…")} (${symbol})`;

export const FuelPriceForm: React.FC<{
  currencies: Currency[];
  formFieldRefs: FormFieldRefs;
  onChangeCallback: () => void;
  favoriteCurrencies: (Currency | undefined)[];
}> = ({ currencies, formFieldRefs, onChangeCallback, favoriteCurrencies }) => {
  const { priceRef, currencyRef, volumeRef } = formFieldRefs;

  return (
    <Form onChange={onChangeCallback} className="row">
      <input
        className="numberInput"
        type="number"
        id="price"
        width={70}
        ref={priceRef}
        onBlur={(event) => {
          const currentDecimal = currencies.find(
            (currency) => currency.code === currencyRef.current?.value
          );
          if (priceRef.current)
            priceRef.current.value = formatPrice(
              event.target.value,
              currentDecimal?.dec ?? 2
            );
        }}
      />
      <div className="cell">
        <select id="currency" ref={currencyRef}>
          {favoriteCurrencies.map(({ code, name, symbol }) => (
            <option key={code} value={code}>
              {formatCurrencyItem(name, symbol)}
            </option>
          ))}
          <option disabled>──────────</option>
          {currencies.map(({ code, name, symbol }) => (
            <option key={code} value={code}>
              {formatCurrencyItem(name, symbol)}
            </option>
          ))}
        </select>

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
