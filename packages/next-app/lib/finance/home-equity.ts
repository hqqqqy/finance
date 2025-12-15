export interface HomeEquityResult {
  homeValue: number;
  mortgageBalance: number;
  homeEquity: number;
  equityPercent: number;
  loanToValue: number;
}

export function calculateHomeEquity(homeValue: number, mortgageBalance: number): HomeEquityResult {
  const homeEquity = homeValue - mortgageBalance;
  const equityPercent = (homeEquity / homeValue) * 100;
  const loanToValue = (mortgageBalance / homeValue) * 100;
  
  return {
    homeValue,
    mortgageBalance,
    homeEquity,
    equityPercent,
    loanToValue
  };
}

