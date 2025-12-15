export interface CapitalGainsResult {
  purchasePrice: number;
  salePrice: number;
  capitalGain: number;
  taxRate: number;
  taxOwed: number;
  netProfit: number;
}

export function calculateCapitalGains(purchasePrice: number, salePrice: number, holdingPeriod: "short" | "long", taxRate: number): CapitalGainsResult {
  const capitalGain = salePrice - purchasePrice;
  const taxOwed = capitalGain * taxRate;
  const netProfit = capitalGain - taxOwed;
  return { purchasePrice, salePrice, capitalGain, taxRate, taxOwed, netProfit };
}

