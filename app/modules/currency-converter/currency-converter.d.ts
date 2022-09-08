import type { RefObject } from "react";

export interface CurrencyFormFieldRefs {
  priceRef: RefObject<HTMLInputElement>;
  currencyRef: RefObject<HTMLSelectElement>;
}
