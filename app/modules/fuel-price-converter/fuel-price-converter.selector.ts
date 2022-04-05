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

  const sourceFuelPrice = parseInt(sourcePrice || "-1", 10);

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

export const formatPrice = (value: string, requiredDecimal: number) => {
  const divider = requiredDecimal > 0 ? Math.pow(10, requiredDecimal) : 1;
  const roundedValue = `${Math.round(parseFloat(value) * divider) / divider}`;

  if (requiredDecimal === 0) return `${roundedValue}`;

  const isInteger = !roundedValue.includes(".");

  const decimals = (roundedValue.split(/\./)?.[1] ?? "").length;
  const missingDecimal = requiredDecimal - decimals;

  console.log({
    divider,
    isInteger,
    value,
    roundedValue,
    decimals,
    missingDecimal,
    requiredDecimal,
  });

  return `${roundedValue}${isInteger ? "." : ""}${"0".repeat(missingDecimal)}`;
};
