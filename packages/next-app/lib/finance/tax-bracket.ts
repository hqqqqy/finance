export interface TaxBracketResult {
  income: number;
  bracket: string;
  marginalRate: number;
  effectiveRate: number;
  totalTax: number;
  netIncome: number;
}

export function calculateTaxBracket(income: number): TaxBracketResult {
  let totalTax = 0;
  let marginalRate = 0;
  let bracket = "";
  
  if (income <= 11000) { totalTax = income * 0.10; marginalRate = 10; bracket = "10%"; }
  else if (income <= 44725) { totalTax = 1100 + (income - 11000) * 0.12; marginalRate = 12; bracket = "12%"; }
  else if (income <= 95375) { totalTax = 5147 + (income - 44725) * 0.22; marginalRate = 22; bracket = "22%"; }
  else if (income <= 182100) { totalTax = 16290 + (income - 95375) * 0.24; marginalRate = 24; bracket = "24%"; }
  else if (income <= 231250) { totalTax = 37104 + (income - 182100) * 0.32; marginalRate = 32; bracket = "32%"; }
  else if (income <= 578125) { totalTax = 52832 + (income - 231250) * 0.35; marginalRate = 35; bracket = "35%"; }
  else { totalTax = 174238.25 + (income - 578125) * 0.37; marginalRate = 37; bracket = "37%"; }
  
  const effectiveRate = (totalTax / income) * 100;
  const netIncome = income - totalTax;
  
  return { income, bracket, marginalRate, effectiveRate, totalTax, netIncome };
}

