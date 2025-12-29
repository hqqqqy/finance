/**
 * Paycheck calculator
 */

export interface PaycheckResult {
  grossPay: number;
  federalTax: number;
  stateTax: number;
  socialSecurity: number;
  medicare: number;
  totalTaxes: number;
  netPay: number;
  takeHomePercent: number;
}

export function calculatePaycheck(
  annualSalary: number,
  payFrequency: "weekly" | "biweekly" | "monthly",
  federalTaxRate: number,
  stateTaxRate: number
): PaycheckResult {
  const periodsPerYear = payFrequency === "weekly" ? 52 : payFrequency === "biweekly" ? 26 : 12;
  const grossPay = annualSalary / periodsPerYear;
  
  const federalTax = grossPay * federalTaxRate;
  const stateTax = grossPay * stateTaxRate;
  const socialSecurity = grossPay * 0.062; // 6.2%
  const medicare = grossPay * 0.0145; // 1.45%
  
  const totalTaxes = federalTax + stateTax + socialSecurity + medicare;
  const netPay = grossPay - totalTaxes;
  const takeHomePercent = (netPay / grossPay) * 100;
  
  return {
    grossPay,
    federalTax,
    stateTax,
    socialSecurity,
    medicare,
    totalTaxes,
    netPay,
    takeHomePercent
  };
}


