/**
 * FIRE (Financial Independence, Retire Early) calculator
 */

export interface FIREResult {
  fireNumber: number;
  yearsToFire: number;
  monthsToFire: number;
  currentProgress: number;
  annualExpenses: number;
  requiredSavingsRate: number;
  projectedRetirementAge: number;
  fireDate: string;
}

export function calculateFIRE(
  currentAge: number,
  currentNetWorth: number,
  annualIncome: number,
  annualExpenses: number,
  annualSavings: number,
  expectedReturn: number,
  withdrawalRate: number = 0.04
): FIREResult {
  const fireNumber = annualExpenses / withdrawalRate;
  const savingsRate = annualIncome > 0 ? (annualSavings / annualIncome) * 100 : 0;
  const currentProgress = fireNumber > 0 ? (currentNetWorth / fireNumber) * 100 : 0;
  
  // Calculate years to FIRE
  let balance = currentNetWorth;
  let years = 0;
  const monthlyReturn = expectedReturn / 12;
  const monthlySavings = annualSavings / 12;
  
  while (balance < fireNumber && years < 100) {
    for (let month = 0; month < 12; month++) {
      balance += monthlySavings;
      balance *= (1 + monthlyReturn);
    }
    years++;
  }
  
  const projectedRetirementAge = currentAge + years;
  const fireDate = new Date();
  fireDate.setFullYear(fireDate.getFullYear() + years);
  
  return {
    fireNumber,
    yearsToFire: years,
    monthsToFire: years * 12,
    currentProgress,
    annualExpenses,
    requiredSavingsRate: savingsRate,
    projectedRetirementAge,
    fireDate: fireDate.toISOString().split('T')[0]
  };
}

