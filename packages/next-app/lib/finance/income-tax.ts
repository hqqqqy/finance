export interface IncomeTaxResult {
  grossIncome: number;
  federalTax: number;
  stateTax: number;
  totalTax: number;
  effectiveRate: number;
  netIncome: number;
}

export function calculateIncomeTax(grossIncome: number, federalRate: number, stateRate: number): IncomeTaxResult {
  const federalTax = grossIncome * federalRate;
  const stateTax = grossIncome * stateRate;
  const totalTax = federalTax + stateTax;
  const effectiveRate = (totalTax / grossIncome) * 100;
  const netIncome = grossIncome - totalTax;
  return { grossIncome, federalTax, stateTax, totalTax, effectiveRate, netIncome };
}


