/**
 * Student loan calculators
 */

export interface StudentLoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  payoffDate: string;
  monthlyBreakdown: Array<{
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
  }>;
}

/**
 * Calculate student loan payment and amortization
 * @param loanAmount - Total loan amount
 * @param interestRate - Annual interest rate (as decimal)
 * @param loanTermYears - Loan term in years
 * @param gracePeriodMonths - Grace period before payments start
 */
export function calculateStudentLoan(
  loanAmount: number,
  interestRate: number,
  loanTermYears: number,
  gracePeriodMonths: number = 6
): StudentLoanResult {
  const monthlyRate = interestRate / 12;
  const numberOfPayments = loanTermYears * 12;
  
  // Calculate interest accrued during grace period (unsubsidized loans)
  const gracePeriodInterest = loanAmount * monthlyRate * gracePeriodMonths;
  const adjustedPrincipal = loanAmount + gracePeriodInterest;
  
  // Calculate monthly payment using amortization formula
  let monthlyPayment = 0;
  if (monthlyRate > 0) {
    monthlyPayment = adjustedPrincipal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  } else {
    monthlyPayment = adjustedPrincipal / numberOfPayments;
  }
  
  // Generate amortization schedule
  const monthlyBreakdown: StudentLoanResult["monthlyBreakdown"] = [];
  let balance = adjustedPrincipal;
  let totalInterest = gracePeriodInterest;
  
  for (let month = 1; month <= numberOfPayments; month++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = monthlyPayment - interestPayment;
    balance -= principalPayment;
    totalInterest += interestPayment;
    
    if (balance < 0) balance = 0;
    
    monthlyBreakdown.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance
    });
  }
  
  const totalPayment = monthlyPayment * numberOfPayments;
  
  // Calculate payoff date
  const today = new Date();
  const payoffDate = new Date(today);
  payoffDate.setMonth(payoffDate.getMonth() + numberOfPayments + gracePeriodMonths);
  
  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    payoffDate: payoffDate.toISOString().split('T')[0],
    monthlyBreakdown
  };
}

/**
 * Calculate Income-Driven Repayment (IDR) plan
 */
export function calculateIDR(
  loanAmount: number,
  interestRate: number,
  annualIncome: number,
  familySize: number = 1
): {
  monthlyPayment: number;
  discretionaryIncome: number;
  paymentAsPercentOfIncome: number;
} {
  // Simplified IDR calculation (10% of discretionary income)
  const federalPovertyLine = 15060 + (familySize - 1) * 5380; // 2024 estimate
  const discretionaryIncome = Math.max(0, annualIncome - (1.5 * federalPovertyLine));
  const monthlyPayment = (discretionaryIncome * 0.10) / 12;
  const paymentAsPercentOfIncome = (monthlyPayment * 12 / annualIncome) * 100;
  
  return {
    monthlyPayment,
    discretionaryIncome,
    paymentAsPercentOfIncome
  };
}


