/**
 * Calculate compound interest
 * Formula: A = P(1 + r/n)^(nt)
 * 
 * @param principal - Initial investment (P)
 * @param annualRate - Annual interest rate as decimal (e.g., 0.07 for 7%)
 * @param years - Time period in years (t)
 * @param compoundingFrequency - Number of times compounded per year (n)
 * @param monthlyContribution - Optional monthly contribution
 * @returns Object with future value, total contributions, total interest, and yearly breakdown
 */

export interface CompoundInterestResult {
  futureValue: number;
  totalContributions: number;
  totalInterest: number;
  yearlyBreakdown: Array<{
    year: number;
    balance: number;
    interest: number;
    contributions: number;
  }>;
}

export function calculateCompoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  compoundingFrequency: number,
  monthlyContribution: number = 0
): CompoundInterestResult {
  const yearlyBreakdown: CompoundInterestResult["yearlyBreakdown"] = [];
  let balance = principal;
  const ratePerPeriod = annualRate / compoundingFrequency;
  const periodsPerYear = compoundingFrequency;
  
  for (let year = 1; year <= years; year++) {
    let yearStartBalance = balance;
    let yearInterest = 0;
    let yearContributions = 0;
    
    // Calculate for each compounding period in the year
    for (let period = 0; period < periodsPerYear; period++) {
      // Add monthly contributions proportionally
      const contributionsThisPeriod = (monthlyContribution * 12) / periodsPerYear;
      balance += contributionsThisPeriod;
      yearContributions += contributionsThisPeriod;
      
      // Apply compound interest
      const interest = balance * ratePerPeriod;
      balance += interest;
      yearInterest += interest;
    }
    
    yearlyBreakdown.push({
      year,
      balance,
      interest: yearInterest,
      contributions: yearContributions
    });
  }
  
  const totalContributions = principal + (monthlyContribution * 12 * years);
  const totalInterest = balance - totalContributions;
  
  return {
    futureValue: balance,
    totalContributions,
    totalInterest,
    yearlyBreakdown
  };
}

/**
 * Calculate simple compound interest (without monthly contributions)
 */
export function calculateSimpleCompoundInterest(
  principal: number,
  annualRate: number,
  years: number,
  compoundingFrequency: number
): number {
  const n = compoundingFrequency;
  const r = annualRate;
  const t = years;
  const P = principal;
  
  return P * Math.pow(1 + r / n, n * t);
}


