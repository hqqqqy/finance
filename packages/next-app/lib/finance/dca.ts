/**
 * Dollar Cost Averaging (DCA) calculator
 */

export interface DCAResult {
  totalInvested: number;
  finalValue: number;
  totalReturn: number;
  returnPercent: number;
  averageCostPerShare: number;
  totalSharesPurchased: number;
  monthlyBreakdown: Array<{
    month: number;
    date: string;
    investment: number;
    pricePerShare: number;
    sharesPurchased: number;
    totalShares: number;
    totalInvested: number;
    marketValue: number;
    gain: number;
  }>;
}

/**
 * Calculate Dollar Cost Averaging results
 * @param investmentAmount - Amount to invest each period
 * @param frequency - Investment frequency (monthly, weekly, etc.)
 * @param duration - Duration in months
 * @param initialPrice - Starting price per share
 * @param finalPrice - Ending price per share
 * @param priceVolatility - Price volatility factor (0-1)
 */
export function calculateDCA(
  investmentAmount: number,
  frequency: "weekly" | "biweekly" | "monthly",
  duration: number,
  initialPrice: number,
  finalPrice: number,
  priceVolatility: number = 0.1
): DCAResult {
  const periods = frequency === "monthly" ? duration : 
                  frequency === "biweekly" ? duration * 2 : 
                  duration * 4;
  
  const monthlyBreakdown: DCAResult["monthlyBreakdown"] = [];
  
  let totalInvested = 0;
  let totalShares = 0;
  
  // Generate simulated price movement
  const priceChange = finalPrice - initialPrice;
  const priceChangePerPeriod = priceChange / periods;
  
  for (let i = 0; i < periods; i++) {
    // Simulate price with some volatility
    const basePrice = initialPrice + (priceChangePerPeriod * i);
    const volatilityFactor = (Math.sin(i * 0.5) * priceVolatility * basePrice);
    const pricePerShare = Math.max(basePrice + volatilityFactor, 0.01);
    
    const sharesPurchased = investmentAmount / pricePerShare;
    totalShares += sharesPurchased;
    totalInvested += investmentAmount;
    
    const marketValue = totalShares * pricePerShare;
    const gain = marketValue - totalInvested;
    
    const date = new Date();
    date.setMonth(date.getMonth() + Math.floor(i / (frequency === "monthly" ? 1 : frequency === "biweekly" ? 0.5 : 0.25)));
    
    monthlyBreakdown.push({
      month: i + 1,
      date: date.toISOString().split('T')[0],
      investment: investmentAmount,
      pricePerShare,
      sharesPurchased,
      totalShares,
      totalInvested,
      marketValue,
      gain
    });
  }
  
  const finalValue = totalShares * finalPrice;
  const totalReturn = finalValue - totalInvested;
  const returnPercent = (totalReturn / totalInvested) * 100;
  const averageCostPerShare = totalInvested / totalShares;
  
  return {
    totalInvested,
    finalValue,
    totalReturn,
    returnPercent,
    averageCostPerShare,
    totalSharesPurchased: totalShares,
    monthlyBreakdown
  };
}

/**
 * Compare DCA vs Lump Sum investment
 */
export function compareDCAvsLumpSum(
  totalAmount: number,
  monthlyAmount: number,
  months: number,
  initialPrice: number,
  finalPrice: number,
  annualReturn: number
): {
  dca: { finalValue: number; return: number };
  lumpSum: { finalValue: number; return: number };
  difference: number;
} {
  // DCA calculation
  const dcaResult = calculateDCA(monthlyAmount, "monthly", months, initialPrice, finalPrice);
  
  // Lump sum calculation
  const monthlyReturn = annualReturn / 12;
  const lumpSumFinalValue = totalAmount * Math.pow(1 + monthlyReturn, months);
  const lumpSumReturn = lumpSumFinalValue - totalAmount;
  
  return {
    dca: {
      finalValue: dcaResult.finalValue,
      return: dcaResult.totalReturn
    },
    lumpSum: {
      finalValue: lumpSumFinalValue,
      return: lumpSumReturn
    },
    difference: lumpSumFinalValue - dcaResult.finalValue
  };
}


