export interface ExchangeRates {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}
