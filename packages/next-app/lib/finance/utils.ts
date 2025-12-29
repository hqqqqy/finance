/**
 * Utility functions for financial calculations and formatting
 */

/**
 * Format number as currency (USD)
 */
export function formatCurrency(amount: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(amount);
}

/**
 * Format number as percentage
 */
export function formatPercent(value: number, decimals: number = 2): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * Format large numbers with K, M, B suffixes
 */
export function formatCompactNumber(num: number): string {
  if (num >= 1e9) return `$${(num / 1e9).toFixed(1)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(1)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(1)}K`;
  return formatCurrency(num, 0);
}

/**
 * Convert annual rate to monthly rate
 */
export function annualToMonthlyRate(annualRate: number): number {
  return annualRate / 12;
}

/**
 * Convert monthly rate to annual rate
 */
export function monthlyToAnnualRate(monthlyRate: number): number {
  return monthlyRate * 12;
}

/**
 * Parse currency string to number
 */
export function parseCurrency(value: string): number {
  return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0;
}

/**
 * Parse percentage string to decimal
 */
export function parsePercent(value: string): number {
  const num = parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0;
  return num / 100;
}

/**
 * Calculate percentage change
 */
export function percentageChange(oldValue: number, newValue: number): number {
  if (oldValue === 0) return 0;
  return ((newValue - oldValue) / oldValue) * 100;
}

/**
 * Calculate effective annual rate from nominal rate with compounding
 */
export function effectiveAnnualRate(
  nominalRate: number,
  compoundingFrequency: number
): number {
  return Math.pow(1 + nominalRate / compoundingFrequency, compoundingFrequency) - 1;
}

/**
 * Round to specified decimal places
 */
export function roundTo(num: number, decimals: number = 2): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

/**
 * Validate positive number
 */
export function isPositiveNumber(value: any): boolean {
  const num = parseFloat(value);
  return !isNaN(num) && num > 0;
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}


