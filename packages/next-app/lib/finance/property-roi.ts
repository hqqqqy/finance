export interface PropertyROIResult {
  annualCashFlow: number;
  cashOnCashReturn: number;
  totalROI: number;
  capRate: number;
}

export function calculatePropertyROI(purchasePrice: number, downPayment: number, monthlyRent: number, monthlyExpenses: number): PropertyROIResult {
  const annualRent = monthlyRent * 12;
  const annualExpenses = monthlyExpenses * 12;
  const annualCashFlow = annualRent - annualExpenses;
  const cashOnCashReturn = (annualCashFlow / downPayment) * 100;
  const capRate = (annualCashFlow / purchasePrice) * 100;
  
  return {
    annualCashFlow,
    cashOnCashReturn,
    totalROI: cashOnCashReturn,
    capRate
  };
}


