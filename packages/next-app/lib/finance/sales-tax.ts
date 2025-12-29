export interface SalesTaxResult {
  preTaxAmount: number;
  taxRate: number;
  taxAmount: number;
  totalAmount: number;
}

export function calculateSalesTax(preTaxAmount: number, taxRate: number): SalesTaxResult {
  const taxAmount = preTaxAmount * taxRate;
  const totalAmount = preTaxAmount + taxAmount;
  return { preTaxAmount, taxRate, taxAmount, totalAmount };
}

export function calculateReverseSalesTax(totalAmount: number, taxRate: number): SalesTaxResult {
  const preTaxAmount = totalAmount / (1 + taxRate);
  const taxAmount = totalAmount - preTaxAmount;
  return { preTaxAmount, taxRate, taxAmount, totalAmount };
}


