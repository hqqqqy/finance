/**
 * Dividend calculators
 */

export interface DividendResult {
  annualDividend: number;
  monthlyDividend: number;
  quarterlyDividend: number;
  dividendYield: number;
  totalInvestment: number;
  sharesOwned: number;
  futureValue: number;
  futureDividend: number;
  yearlyBreakdown: Array<{
    year: number;
    shares: number;
    stockValue: number;
    annualDividend: number;
    totalValue: number;
  }>;
}

/**
 * Calculate dividend income and potential growth
 * @param numberOfShares - Number of shares owned
 * @param pricePerShare - Current price per share
 * @param annualDividendPerShare - Annual dividend per share
 * @param dividendGrowthRate - Expected annual dividend growth rate (as decimal)
 * @param stockPriceGrowthRate - Expected annual stock price growth rate (as decimal)
 * @param years - Time horizon in years
 * @param reinvestDividends - Whether to reinvest dividends
 */
export function calculateDividend(
  numberOfShares: number,
  pricePerShare: number,
  annualDividendPerShare: number,
  dividendGrowthRate: number = 0,
  stockPriceGrowthRate: number = 0,
  years: number = 10,
  reinvestDividends: boolean = false
): DividendResult {
  const totalInvestment = numberOfShares * pricePerShare;
  const annualDividend = numberOfShares * annualDividendPerShare;
  const dividendYield = (annualDividendPerShare / pricePerShare) * 100;
  
  const yearlyBreakdown: DividendResult["yearlyBreakdown"] = [];
  
  let shares = numberOfShares;
  let currentPrice = pricePerShare;
  let currentDividendPerShare = annualDividendPerShare;
  
  for (let year = 0; year <= years; year++) {
    if (year > 0) {
      // Grow dividend per share
      currentDividendPerShare *= (1 + dividendGrowthRate);
      
      // Grow stock price
      currentPrice *= (1 + stockPriceGrowthRate);
      
      // Reinvest dividends if enabled
      if (reinvestDividends) {
        const dividendIncome = shares * currentDividendPerShare;
        const newShares = dividendIncome / currentPrice;
        shares += newShares;
      }
    }
    
    const annualDividendIncome = shares * currentDividendPerShare;
    const stockValue = shares * currentPrice;
    
    yearlyBreakdown.push({
      year,
      shares,
      stockValue,
      annualDividend: annualDividendIncome,
      totalValue: stockValue
    });
  }
  
  const lastYear = yearlyBreakdown[yearlyBreakdown.length - 1];
  
  return {
    annualDividend,
    monthlyDividend: annualDividend / 12,
    quarterlyDividend: annualDividend / 4,
    dividendYield,
    totalInvestment,
    sharesOwned: numberOfShares,
    futureValue: lastYear.totalValue,
    futureDividend: lastYear.annualDividend,
    yearlyBreakdown
  };
}

