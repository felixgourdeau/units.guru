import { VOLUME_UNITS } from "~/modules/volume-select/volume-select.constant";

import type { FuelPriceFormFieldRefs } from "./fuel-price-converter";

export const selectValuesFromFormFieldsRef = (
  inputFieldRefs: FuelPriceFormFieldRefs,
  outputFieldRefs: FuelPriceFormFieldRefs
) => ({
  sourcePrice: inputFieldRefs.priceRef.current?.value,
  sourceCurrency: inputFieldRefs.currencyRef.current?.value,
  sourceVolume: inputFieldRefs.volumeRef.current?.value,
  destinationPrice: outputFieldRefs.priceRef.current?.value,
  destinationCurrency: outputFieldRefs.currencyRef.current?.value,
  destinationVolume: outputFieldRefs.volumeRef.current?.value,
});

export const getDestinationFuelPrice = ({
  sourcePrice,
  sourceCurrency,
  destinationCurrency,
  sourceVolume,
  destinationVolume,
  rates,
}: {
  sourcePrice?: string;
  sourceCurrency?: string;
  sourceVolume?: string;
  destinationCurrency?: string;
  destinationVolume?: string;
  rates: Record<string, number>;
}) => {
  if (sourcePrice === "") return;

  const sourceFuelPrice = parseFloat(sourcePrice || "-1");

  if (!sourceCurrency || !destinationCurrency || !sourceFuelPrice) return;

  const sourceRate = rates[sourceCurrency];
  const destinationRate = rates[destinationCurrency];

  const sourceVolumeAmount = VOLUME_UNITS.find(
    (quantity) => quantity.abbreviation === sourceVolume
  )?.amount;
  const destinationVolumeAmount = VOLUME_UNITS.find(
    (quantity) => quantity.abbreviation === destinationVolume
  )?.amount;

  if (
    !sourceRate ||
    !destinationRate ||
    !sourceVolumeAmount ||
    !destinationVolumeAmount
  )
    return;

  return (
    (sourceFuelPrice * destinationRate * sourceVolumeAmount) /
    destinationVolumeAmount /
    sourceRate
  );
};

export const swapForm = (
  inputFieldRefs: FuelPriceFormFieldRefs,
  outputFieldRefs: FuelPriceFormFieldRefs
) => {
  const {
    sourcePrice,
    sourceCurrency,
    sourceVolume,
    destinationPrice,
    destinationCurrency,
    destinationVolume,
  } = selectValuesFromFormFieldsRef(inputFieldRefs, outputFieldRefs);

  if (inputFieldRefs.priceRef.current && destinationPrice)
    inputFieldRefs.priceRef.current.value = destinationPrice;
  if (inputFieldRefs.currencyRef.current && destinationCurrency)
    inputFieldRefs.currencyRef.current.value = destinationCurrency;
  if (inputFieldRefs.volumeRef.current && destinationVolume)
    inputFieldRefs.volumeRef.current.value = destinationVolume;
  if (outputFieldRefs.priceRef.current && sourcePrice)
    outputFieldRefs.priceRef.current.value = sourcePrice;
  if (outputFieldRefs.currencyRef.current && sourceCurrency)
    outputFieldRefs.currencyRef.current.value = sourceCurrency;
  if (outputFieldRefs.volumeRef.current && sourceVolume)
    outputFieldRefs.volumeRef.current.value = sourceVolume;
};
