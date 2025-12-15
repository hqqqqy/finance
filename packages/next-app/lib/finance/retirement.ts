/**
 * Retirement account calculators (401k, Roth IRA, etc.)
 */

export interface RetirementResult {
  futureValue: number;
  totalContributions: number;
  totalInterest: number;
  employerMatch: number;
  taxSavings: number;
  yearlyBreakdown: Array<{
    year: number;
    age: number;
    balance: number;
    contributions: number;
    employerContributions: number;
    interest: number;
  }>;
}

/**
 * Calculate 401k retirement savings
 * @param currentAge - Current age
 * @param retirementAge - Planned retirement age
 * @param currentBalance - Current 401k balance
 * @param annualContribution - Annual contribution amount
 * @param employerMatch - Employer match percentage (as decimal)
 * @param matchLimit - Employer match limit (as decimal of salary)
 * @param annualSalary - Annual salary
 * @param annualReturn - Expected annual return (as decimal)
 * @param taxRate - Current tax rate (as decimal)
 */
export function calculate401k(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  employerMatch: number,
  matchLimit: number,
  annualSalary: number,
  annualReturn: number,
  taxRate: number
): RetirementResult {
  const years = retirementAge - currentAge;
  const yearlyBreakdown: RetirementResult["yearlyBreakdown"] = [];
  
  let balance = currentBalance;
  let totalContributions = currentBalance;
  let totalEmployerMatch = 0;
  let totalTaxSavings = 0;
  
  for (let year = 1; year <= years; year++) {
    const contributionThisYear = Math.min(annualContribution, annualSalary);
    const contributionPercent = contributionThisYear / annualSalary;
    const matchPercent = Math.min(contributionPercent, matchLimit);
    const employerContribution = annualSalary * matchPercent * employerMatch;
    
    balance += contributionThisYear + employerContribution;
    const interest = balance * annualReturn;
    balance += interest;
    
    totalContributions += contributionThisYear;
    totalEmployerMatch += employerContribution;
    totalTaxSavings += contributionThisYear * taxRate;
    
    yearlyBreakdown.push({
      year,
      age: currentAge + year,
      balance,
      contributions: contributionThisYear,
      employerContributions: employerContribution,
      interest
    });
  }
  
  const totalInterest = balance - totalContributions - totalEmployerMatch;
  
  return {
    futureValue: balance,
    totalContributions,
    totalInterest,
    employerMatch: totalEmployerMatch,
    taxSavings: totalTaxSavings,
    yearlyBreakdown
  };
}

/**
 * Calculate Roth IRA retirement savings
 * @param currentAge - Current age
 * @param retirementAge - Planned retirement age
 * @param currentBalance - Current Roth IRA balance
 * @param annualContribution - Annual contribution amount (max $6,500 or $7,500 if 50+)
 * @param annualReturn - Expected annual return (as decimal)
 */
export function calculateRothIRA(
  currentAge: number,
  retirementAge: number,
  currentBalance: number,
  annualContribution: number,
  annualReturn: number
): RetirementResult {
  const years = retirementAge - currentAge;
  const yearlyBreakdown: RetirementResult["yearlyBreakdown"] = [];
  
  let balance = currentBalance;
  let totalContributions = currentBalance;
  
  const contributionLimit2024 = currentAge >= 50 ? 7500 : 6500;
  
  for (let year = 1; year <= years; year++) {
    const age = currentAge + year;
    const contributionLimit = age >= 50 ? 7500 : 6500;
    const contributionThisYear = Math.min(annualContribution, contributionLimit);
    
    balance += contributionThisYear;
    const interest = balance * annualReturn;
    balance += interest;
    
    totalContributions += contributionThisYear;
    
    yearlyBreakdown.push({
      year,
      age,
      balance,
      contributions: contributionThisYear,
      employerContributions: 0,
      interest
    });
  }
  
  const totalInterest = balance - totalContributions;
  
  return {
    futureValue: balance,
    totalContributions,
    totalInterest,
    employerMatch: 0,
    taxSavings: 0, // Roth IRA grows tax-free but contributions are after-tax
    yearlyBreakdown
  };
}

