/**
 * Cryptocurrency profit calculator
 */

export interface CryptoProfitResult {
  totalInvestment: number;
  currentValue: number;
  profit: number;
  profitPercent: number;
  averageBuyPrice: number;
  currentPrice: number;
  totalCoins: number;
  breakEvenPrice: number;
  roi: number;
}

/**
 * Calculate cryptocurrency profit/loss
 * @param purchases - Array of purchase transactions
 * @param currentPrice - Current price per coin
 * @param fees - Total fees paid (optional)
 */
export function calculateCryptoProfit(
  purchases: Array<{
    coins: number;
    pricePerCoin: number;
    fee?: number;
  }>,
  currentPrice: number,
  fees: number = 0
): CryptoProfitResult {
  let totalInvestment = fees;
  let totalCoins = 0;
  
  for (const purchase of purchases) {
    const purchaseCost = purchase.coins * purchase.pricePerCoin;
    const purchaseFee = purchase.fee || 0;
    
    totalInvestment += purchaseCost + purchaseFee;
    totalCoins += purchase.coins;
  }
  
  const averageBuyPrice = totalCoins > 0 ? (totalInvestment - fees) / totalCoins : 0;
  const currentValue = totalCoins * currentPrice;
  const profit = currentValue - totalInvestment;
  const profitPercent = totalInvestment > 0 ? (profit / totalInvestment) * 100 : 0;
  const roi = profitPercent;
  const breakEvenPrice = totalCoins > 0 ? totalInvestment / totalCoins : 0;
  
  return {
    totalInvestment,
    currentValue,
    profit,
    profitPercent,
    averageBuyPrice,
    currentPrice,
    totalCoins,
    breakEvenPrice,
    roi
  };
}

/**
 * Calculate simple crypto profit (single purchase)
 */
export function calculateSimpleCryptoProfit(
  investmentAmount: number,
  buyPrice: number,
  currentPrice: number,
  fees: number = 0
): CryptoProfitResult {
  const totalInvestment = investmentAmount + fees;
  const coins = investmentAmount / buyPrice;
  const currentValue = coins * currentPrice;
  const profit = currentValue - totalInvestment;
  const profitPercent = (profit / totalInvestment) * 100;
  
  return {
    totalInvestment,
    currentValue,
    profit,
    profitPercent,
    averageBuyPrice: buyPrice,
    currentPrice,
    totalCoins: coins,
    breakEvenPrice: totalInvestment / coins,
    roi: profitPercent
  };
}

/**
 * Calculate profit target price
 */
export function calculateTargetPrice(
  totalInvestment: number,
  totalCoins: number,
  targetProfitPercent: number,
  fees: number = 0
): number {
  const targetValue = totalInvestment * (1 + targetProfitPercent / 100);
  const sellingFees = targetValue * (fees / 100);
  const neededValue = targetValue + sellingFees;
  
  return neededValue / totalCoins;
}

