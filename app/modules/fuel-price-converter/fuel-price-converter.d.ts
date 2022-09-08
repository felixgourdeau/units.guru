import type { RefObject } from "react";

export interface FuelPriceFormFieldRefs {
  priceRef: RefObject<HTMLInputElement>;
  currencyRef: RefObject<HTMLSelectElement>;
  volumeRef: RefObject<HTMLSelectElement>;
}
