/**
 * Savings goal calculator
 */

export interface SavingsGoalResult {
  monthsToGoal: number;
  yearsToGoal: number;
  monthlyRequired: number;
  totalSaved: number;
  interestEarned: number;
  targetDate: string;
}

export function calculateSavingsGoal(
  targetAmount: number,
  currentSavings: number,
  monthlyContribution: number,
  interestRate: number
): SavingsGoalResult {
  const monthlyRate = interestRate / 12;
  let balance = currentSavings;
  let months = 0;
  let totalInterest = 0;
  
  while (balance < targetAmount && months < 600) {
    months++;
    balance += monthlyContribution;
    const interest = balance * monthlyRate;
    balance += interest;
    totalInterest += interest;
  }
  
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + months);
  
  return {
    monthsToGoal: months,
    yearsToGoal: months / 12,
    monthlyRequired: monthlyContribution,
    totalSaved: targetAmount,
    interestEarned: totalInterest,
    targetDate: targetDate.toISOString().split('T')[0]
  };
}


