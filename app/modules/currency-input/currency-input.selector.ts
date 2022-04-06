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
