import { Currency } from "~/modules/currency/currency";

export const selectDecimalsFromCurrency = (
  currencyCode: string | undefined,
  currencies: Currency[]
) => {
  const currency = currencies.find(
    (currency) => currency.code === currencyCode
  );
  return currency?.dec ?? 2;
};
