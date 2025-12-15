export interface AffordabilityResult {
  maxHomePrice: number;
  maxLoanAmount: number;
  monthlyPayment: number;
  requiredIncome: number;
}

export function calculateAffordability(annualIncome: number, monthlyDebts: number, downPaymentPercent: number, interestRate: number): AffordabilityResult {
  const monthlyIncome = annualIncome / 12;
  const maxMonthlyPayment = (monthlyIncome * 0.28) - monthlyDebts;
  const monthlyRate = interestRate / 12;
  const months = 30 * 12;
  
  const maxLoanAmount = maxMonthlyPayment * (Math.pow(1 + monthlyRate, months) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, months));
  const maxHomePrice = maxLoanAmount / (1 - downPaymentPercent);
  
  return {
    maxHomePrice,
    maxLoanAmount,
    monthlyPayment: maxMonthlyPayment,
    requiredIncome: annualIncome
  };
}

