/**
 * Calculate loan payment and amortization schedule
 */

export interface LoanPayment {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  totalPrincipal: number;
}

export interface AmortizationEntry {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

/**
 * Calculate monthly loan payment
 * Formula: M = P[r(1+r)^n]/[(1+r)^n-1]
 * 
 * @param principal - Loan amount
 * @param annualRate - Annual interest rate as decimal (e.g., 0.05 for 5%)
 * @param years - Loan term in years
 * @returns Monthly payment amount
 */
export function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  years: number
): number {
  const monthlyRate = annualRate / 12;
  const numberOfPayments = years * 12;
  
  if (monthlyRate === 0) {
    return principal / numberOfPayments;
  }
  
  const monthlyPayment =
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
  
  return monthlyPayment;
}

/**
 * Calculate full loan details
 */
export function calculateLoanPayment(
  principal: number,
  annualRate: number,
  years: number
): LoanPayment {
  const monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);
  const numberOfPayments = years * 12;
  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - principal;
  
  return {
    monthlyPayment,
    totalPayment,
    totalInterest,
    totalPrincipal: principal
  };
}

/**
 * Generate complete amortization schedule
 */
export function generateAmortizationSchedule(
  principal: number,
  annualRate: number,
  years: number
): AmortizationEntry[] {
  const monthlyRate = annualRate / 12;
  const numberOfPayments = years * 12;
  const monthlyPayment = calculateMonthlyPayment(principal, annualRate, years);
  
  const schedule: AmortizationEntry[] = [];
  let balance = principal;
  
  for (let month = 1; month <= numberOfPayments; month++) {
    const interest = balance * monthlyRate;
    const principalPayment = monthlyPayment - interest;
    balance -= principalPayment;
    
    // Handle final payment rounding
    if (month === numberOfPayments) {
      balance = 0;
    }
    
    schedule.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest,
      balance: Math.max(0, balance)
    });
  }
  
  return schedule;
}

/**
 * Calculate mortgage payment with taxes and insurance
 */
export interface MortgagePayment extends LoanPayment {
  principalAndInterest: number;
  propertyTax: number;
  insurance: number;
  pmi?: number;
  totalMonthlyPayment: number;
}

export function calculateMortgagePayment(
  homePrice: number,
  downPayment: number,
  annualRate: number,
  years: number,
  annualPropertyTax: number = 0,
  annualInsurance: number = 0,
  pmiRate: number = 0
): MortgagePayment {
  const principal = homePrice - downPayment;
  const loanPayment = calculateLoanPayment(principal, annualRate, years);
  
  const monthlyPropertyTax = annualPropertyTax / 12;
  const monthlyInsurance = annualInsurance / 12;
  
  // PMI is typically required if down payment < 20%
  const downPaymentPercent = (downPayment / homePrice) * 100;
  const monthlyPMI = downPaymentPercent < 20 ? (principal * pmiRate) / 12 : 0;
  
  const totalMonthlyPayment =
    loanPayment.monthlyPayment +
    monthlyPropertyTax +
    monthlyInsurance +
    monthlyPMI;
  
  return {
    ...loanPayment,
    principalAndInterest: loanPayment.monthlyPayment,
    propertyTax: monthlyPropertyTax,
    insurance: monthlyInsurance,
    pmi: monthlyPMI,
    totalMonthlyPayment
  };
}

