/**
 * Net worth calculator
 */

export interface NetWorthResult {
  totalAssets: number;
  totalLiabilities: number;
  netWorth: number;
  liquidAssets: number;
  liquidityRatio: number;
  netWorthCategory: string;
}

export function calculateNetWorth(
  cash: number,
  investments: number,
  retirement: number,
  realEstate: number,
  vehicles: number,
  otherAssets: number,
  mortgage: number,
  loans: number,
  creditCards: number,
  otherLiabilities: number
): NetWorthResult {
  const totalAssets = cash + investments + retirement + realEstate + vehicles + otherAssets;
  const totalLiabilities = mortgage + loans + creditCards + otherLiabilities;
  const netWorth = totalAssets - totalLiabilities;
  const liquidAssets = cash + investments;
  const liquidityRatio = totalAssets > 0 ? (liquidAssets / totalAssets) * 100 : 0;
  
  let netWorthCategory = "";
  if (netWorth < 0) netWorthCategory = "Negative (In Debt)";
  else if (netWorth < 50000) netWorthCategory = "Building";
  else if (netWorth < 250000) netWorthCategory = "Moderate";
  else if (netWorth < 1000000) netWorthCategory = "Strong";
  else netWorthCategory = "Excellent";
  
  return {
    totalAssets,
    totalLiabilities,
    netWorth,
    liquidAssets,
    liquidityRatio,
    netWorthCategory
  };
}

