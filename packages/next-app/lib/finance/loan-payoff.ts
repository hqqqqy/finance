/**
 * Loan payoff and extra payment calculators
 */

export interface LoanPayoffResult {
  originalMonthlyPayment: number;
  originalTotalPayment: number;
  originalTotalInterest: number;
  originalPayoffMonths: number;
  newMonthlyPayment: number;
  newTotalPayment: number;
  newTotalInterest: number;
  newPayoffMonths: number;
  timeSaved: number;
  interestSaved: number;
  totalSaved: number;
}

/**
 * Calculate loan payoff with extra payments
 * @param loanAmount - Current loan balance
 * @param interestRate - Annual interest rate (as decimal)
 * @param loanTermYears - Original loan term in years
 * @param extraMonthlyPayment - Extra payment amount per month
 * @param extraYearlyPayment - Extra payment amount per year
 */
export function calculateLoanPayoff(
  loanAmount: number,
  interestRate: number,
  loanTermYears: number,
  extraMonthlyPayment: number = 0,
  extraYearlyPayment: number = 0
): LoanPayoffResult {
  const monthlyRate = interestRate / 12;
  const numberOfPayments = loanTermYears * 12;
  
  // Calculate original monthly payment
  let originalMonthlyPayment = 0;
  if (monthlyRate > 0) {
    originalMonthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  } else {
    originalMonthlyPayment = loanAmount / numberOfPayments;
  }
  
  // Calculate original total payment and interest
  const originalTotalPayment = originalMonthlyPayment * numberOfPayments;
  const originalTotalInterest = originalTotalPayment - loanAmount;
  
  // Calculate with extra payments
  const newMonthlyPayment = originalMonthlyPayment + extraMonthlyPayment;
  let balance = loanAmount;
  let totalInterest = 0;
  let month = 0;
  
  while (balance > 0 && month < 600) { // 50 year max
    month++;
    
    const interestPayment = balance * monthlyRate;
    let principalPayment = newMonthlyPayment - interestPayment;
    
    // Add yearly extra payment if applicable
    if (month % 12 === 0) {
      principalPayment += extraYearlyPayment;
    }
    
    if (principalPayment > balance) {
      principalPayment = balance;
    }
    
    balance -= principalPayment;
    totalInterest += interestPayment;
  }
  
  const newPayoffMonths = month;
  const newTotalPayment = loanAmount + totalInterest;
  const timeSaved = numberOfPayments - newPayoffMonths;
  const interestSaved = originalTotalInterest - totalInterest;
  const totalSaved = originalTotalPayment - newTotalPayment;
  
  return {
    originalMonthlyPayment,
    originalTotalPayment,
    originalTotalInterest,
    originalPayoffMonths: numberOfPayments,
    newMonthlyPayment,
    newTotalPayment,
    newTotalInterest: totalInterest,
    newPayoffMonths,
    timeSaved,
    interestSaved,
    totalSaved
  };
}


