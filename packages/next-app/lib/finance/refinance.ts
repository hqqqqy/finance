/**
 * Loan refinance calculator
 */

export interface RefinanceResult {
  currentMonthlyPayment: number;
  currentRemainingPayment: number;
  currentRemainingInterest: number;
  newMonthlyPayment: number;
  newTotalPayment: number;
  newTotalInterest: number;
  monthlySavings: number;
  totalSavings: number;
  breakEvenMonths: number;
  shouldRefinance: boolean;
}

/**
 * Calculate refinance comparison
 * @param currentBalance - Current loan balance
 * @param currentRate - Current annual interest rate (as decimal)
 * @param currentRemainingYears - Years remaining on current loan
 * @param newRate - New loan annual interest rate (as decimal)
 * @param newTermYears - New loan term in years
 * @param refinanceCosts - Closing costs and fees for refinancing
 */
export function calculateRefinance(
  currentBalance: number,
  currentRate: number,
  currentRemainingYears: number,
  newRate: number,
  newTermYears: number,
  refinanceCosts: number
): RefinanceResult {
  const currentMonthlyRate = currentRate / 12;
  const currentRemainingMonths = currentRemainingYears * 12;
  
  // Calculate current monthly payment
  let currentMonthlyPayment = 0;
  if (currentMonthlyRate > 0) {
    currentMonthlyPayment = currentBalance * 
      (currentMonthlyRate * Math.pow(1 + currentMonthlyRate, currentRemainingMonths)) / 
      (Math.pow(1 + currentMonthlyRate, currentRemainingMonths) - 1);
  } else {
    currentMonthlyPayment = currentBalance / currentRemainingMonths;
  }
  
  const currentRemainingPayment = currentMonthlyPayment * currentRemainingMonths;
  const currentRemainingInterest = currentRemainingPayment - currentBalance;
  
  // Calculate new loan details
  const newMonthlyRate = newRate / 12;
  const newMonths = newTermYears * 12;
  const newLoanAmount = currentBalance + refinanceCosts;
  
  let newMonthlyPayment = 0;
  if (newMonthlyRate > 0) {
    newMonthlyPayment = newLoanAmount * 
      (newMonthlyRate * Math.pow(1 + newMonthlyRate, newMonths)) / 
      (Math.pow(1 + newMonthlyRate, newMonths) - 1);
  } else {
    newMonthlyPayment = newLoanAmount / newMonths;
  }
  
  const newTotalPayment = newMonthlyPayment * newMonths;
  const newTotalInterest = newTotalPayment - newLoanAmount;
  
  // Calculate savings
  const monthlySavings = currentMonthlyPayment - newMonthlyPayment;
  const totalSavings = currentRemainingPayment - newTotalPayment;
  
  // Calculate break-even point
  const breakEvenMonths = refinanceCosts / monthlySavings;
  
  // Determine if refinancing is beneficial
  const shouldRefinance = totalSavings > 0 && breakEvenMonths < newMonths;
  
  return {
    currentMonthlyPayment,
    currentRemainingPayment,
    currentRemainingInterest,
    newMonthlyPayment,
    newTotalPayment,
    newTotalInterest,
    monthlySavings,
    totalSavings,
    breakEvenMonths,
    shouldRefinance
  };
}


