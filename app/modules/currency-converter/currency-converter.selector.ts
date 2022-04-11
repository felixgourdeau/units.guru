import { CurrencyFormFieldRefs } from "./currency-converter";

export const selectValuesFromFormFieldsRef = (
  inputFieldRefs: CurrencyFormFieldRefs,
  outputFieldRefs: CurrencyFormFieldRefs
) => ({
  sourcePrice: inputFieldRefs.priceRef.current?.value,
  sourceCurrency: inputFieldRefs.currencyRef.current?.value,
  destinationPrice: outputFieldRefs.priceRef.current?.value,
  destinationCurrency: outputFieldRefs.currencyRef.current?.value,
});

export const getDestinationPrice = ({
  sourcePrice,
  sourceCurrency,
  destinationCurrency,
  rates,
}: {
  sourcePrice?: string;
  sourceCurrency?: string;
  destinationCurrency?: string;
  destinationVolume?: string;
  rates: Record<string, number>;
}) => {
  if (sourcePrice === "") return;

  const source = parseFloat(sourcePrice || "-1");

  if (!sourceCurrency || !destinationCurrency || !source) return;

  const sourceRate = rates[sourceCurrency];
  const destinationRate = rates[destinationCurrency];

  if (!sourceRate || !destinationRate) return;

  return (source * destinationRate) / sourceRate;
};

export const swapForm = (
  inputFieldRefs: CurrencyFormFieldRefs,
  outputFieldRefs: CurrencyFormFieldRefs
) => {
  const { sourcePrice, sourceCurrency, destinationPrice, destinationCurrency } =
    selectValuesFromFormFieldsRef(inputFieldRefs, outputFieldRefs);

  if (inputFieldRefs.priceRef.current && destinationPrice)
    inputFieldRefs.priceRef.current.value = destinationPrice;
  if (inputFieldRefs.currencyRef.current && destinationCurrency)
    inputFieldRefs.currencyRef.current.value = destinationCurrency;
  if (outputFieldRefs.priceRef.current && sourcePrice)
    outputFieldRefs.priceRef.current.value = sourcePrice;
  if (outputFieldRefs.currencyRef.current && sourceCurrency)
    outputFieldRefs.currencyRef.current.value = sourceCurrency;
};
