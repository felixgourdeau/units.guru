import { RefObject } from "react";

export interface FormFieldRefs {
  priceRef: RefObject<HTMLInputElement>;
  currencyRef: RefObject<HTMLSelectElement>;
  volumeRef: RefObject<HTMLSelectElement>;
}

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  dec: number;
  unit: string;
}
