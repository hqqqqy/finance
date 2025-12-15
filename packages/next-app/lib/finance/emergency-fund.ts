/**
 * Emergency fund calculator
 */

export interface EmergencyFundResult {
  recommendedFund: number;
  currentCoverage: number;
  monthsCovered: number;
  amountNeeded: number;
  monthsToSave: number;
}

export function calculateEmergencyFund(
  monthlyExpenses: number,
  currentSavings: number,
  monthlyContribution: number,
  targetMonths: number = 6
): EmergencyFundResult {
  const recommendedFund = monthlyExpenses * targetMonths;
  const monthsCovered = monthlyExpenses > 0 ? currentSavings / monthlyExpenses : 0;
  const amountNeeded = Math.max(0, recommendedFund - currentSavings);
  const monthsToSave = monthlyContribution > 0 ? Math.ceil(amountNeeded / monthlyContribution) : 0;
  
  return {
    recommendedFund,
    currentCoverage: currentSavings,
    monthsCovered,
    amountNeeded,
    monthsToSave
  };
}

