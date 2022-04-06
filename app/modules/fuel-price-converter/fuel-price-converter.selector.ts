import { VOLUME_UNITS } from "./fuel-price-converter.constant";

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
