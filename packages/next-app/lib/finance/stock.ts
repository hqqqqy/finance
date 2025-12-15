/**
 * Stock investment calculators
 */

export interface StockReturnResult {
  finalValue: number;
  totalGain: number;
  totalGainPercent: number;
  annualizedReturn: number;
  yearlyBreakdown: Array<{
    year: number;
    value: number;
    gain: number;
  }>;
}

/**
 * Calculate stock return on investment
 * @param initialInvestment - Initial investment amount
 * @param finalValue - Final value (or current value)
 * @param years - Investment period in years
 * @param dividends - Total dividends received (optional)
 */
export function calculateStockReturn(
  initialInvestment: number,
  finalValue: number,
  years: number,
  dividends: number = 0
): StockReturnResult {
  const totalValue = finalValue + dividends;
  const totalGain = totalValue - initialInvestment;
  const totalGainPercent = (totalGain / initialInvestment) * 100;
  
  // Calculate annualized return using CAGR formula
  const annualizedReturn = (Math.pow(totalValue / initialInvestment, 1 / years) - 1) * 100;
  
  // Generate yearly breakdown assuming steady growth
  const yearlyGrowthRate = Math.pow(finalValue / initialInvestment, 1 / years) - 1;
  const yearlyBreakdown: StockReturnResult["yearlyBreakdown"] = [];
  
  for (let year = 0; year <= years; year++) {
    const value = initialInvestment * Math.pow(1 + yearlyGrowthRate, year);
    const gain = value - initialInvestment;
    
    yearlyBreakdown.push({
      year,
      value,
      gain
    });
  }
  
  return {
    finalValue: totalValue,
    totalGain,
    totalGainPercent,
    annualizedReturn,
    yearlyBreakdown
  };
}

/**
 * Calculate stock investment with regular contributions
 */
export function calculateStockInvestment(
  initialInvestment: number,
  monthlyContribution: number,
  years: number,
  annualReturn: number
): StockReturnResult {
  const monthlyReturn = annualReturn / 12;
  const months = years * 12;
  
  let balance = initialInvestment;
  const yearlyBreakdown: StockReturnResult["yearlyBreakdown"] = [];
  
  yearlyBreakdown.push({
    year: 0,
    value: initialInvestment,
    gain: 0
  });
  
  for (let month = 1; month <= months; month++) {
    balance += monthlyContribution;
    balance *= (1 + monthlyReturn);
    
    if (month % 12 === 0) {
      const year = month / 12;
      const totalContributions = initialInvestment + (monthlyContribution * month);
      const gain = balance - totalContributions;
      
      yearlyBreakdown.push({
        year,
        value: balance,
        gain
      });
    }
  }
  
  const totalContributions = initialInvestment + (monthlyContribution * months);
  const totalGain = balance - totalContributions;
  const totalGainPercent = (totalGain / totalContributions) * 100;
  const annualizedReturn = (Math.pow(balance / totalContributions, 1 / years) - 1) * 100;
  
  return {
    finalValue: balance,
    totalGain,
    totalGainPercent,
    annualizedReturn,
    yearlyBreakdown
  };
}

