export interface ClosingCostsResult {
  lenderFees: number;
  titleFees: number;
  governmentFees: number;
  prepaidItems: number;
  totalClosingCosts: number;
  totalCashNeeded: number;
}

export function calculateClosingCosts(homePrice: number, downPaymentPercent: number, loanAmount: number): ClosingCostsResult {
  const lenderFees = loanAmount * 0.01;
  const titleFees = homePrice * 0.005;
  const governmentFees = homePrice * 0.002;
  const prepaidItems = homePrice * 0.005;
  const totalClosingCosts = lenderFees + titleFees + governmentFees + prepaidItems;
  const downPayment = homePrice * downPaymentPercent;
  const totalCashNeeded = downPayment + totalClosingCosts;
  
  return {
    lenderFees,
    titleFees,
    governmentFees,
    prepaidItems,
    totalClosingCosts,
    totalCashNeeded
  };
}


