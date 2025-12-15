/**
 * Debt snowball and avalanche calculators
 */

export interface Debt {
  name: string;
  balance: number;
  interestRate: number;
  minimumPayment: number;
}

export interface DebtPayoffPlan {
  totalMonths: number;
  totalInterest: number;
  totalPayment: number;
  debts: Array<{
    name: string;
    originalBalance: number;
    payoffMonth: number;
    totalInterest: number;
  }>;
  monthlyProgress: Array<{
    month: number;
    totalBalance: number;
    totalPaid: number;
    interestPaid: number;
  }>;
}

/**
 * Calculate debt snowball payoff (smallest balance first)
 * @param debts - Array of debt objects
 * @param extraPayment - Extra monthly payment to apply
 */
export function calculateDebtSnowball(
  debts: Debt[],
  extraPayment: number
): DebtPayoffPlan {
  // Sort by balance (smallest first)
  const sortedDebts = [...debts].sort((a, b) => a.balance - b.balance);
  return calculateDebtPayoff(sortedDebts, extraPayment);
}

/**
 * Calculate debt avalanche payoff (highest interest first)
 * @param debts - Array of debt objects
 * @param extraPayment - Extra monthly payment to apply
 */
export function calculateDebtAvalanche(
  debts: Debt[],
  extraPayment: number
): DebtPayoffPlan {
  // Sort by interest rate (highest first)
  const sortedDebts = [...debts].sort((a, b) => b.interestRate - a.interestRate);
  return calculateDebtPayoff(sortedDebts, extraPayment);
}

/**
 * Internal function to calculate debt payoff based on sorted order
 */
function calculateDebtPayoff(
  sortedDebts: Debt[],
  extraPayment: number
): DebtPayoffPlan {
  const workingDebts = sortedDebts.map(d => ({
    ...d,
    currentBalance: d.balance,
    totalInterest: 0,
    payoffMonth: 0
  }));
  
  let month = 0;
  let totalInterestPaid = 0;
  let totalPaid = 0;
  const monthlyProgress: DebtPayoffPlan["monthlyProgress"] = [];
  
  while (workingDebts.some(d => d.currentBalance > 0) && month < 600) {
    month++;
    let availableExtra = extraPayment;
    
    // Pay minimum on all debts
    for (const debt of workingDebts) {
      if (debt.currentBalance > 0) {
        const monthlyRate = debt.interestRate / 12;
        const interest = debt.currentBalance * monthlyRate;
        const principal = Math.min(debt.minimumPayment - interest, debt.currentBalance);
        
        debt.currentBalance -= principal;
        debt.totalInterest += interest;
        totalInterestPaid += interest;
        totalPaid += principal + interest;
      }
    }
    
    // Apply extra payment to first debt with balance
    for (const debt of workingDebts) {
      if (debt.currentBalance > 0 && availableExtra > 0) {
        const extraPrincipal = Math.min(availableExtra, debt.currentBalance);
        debt.currentBalance -= extraPrincipal;
        totalPaid += extraPrincipal;
        availableExtra -= extraPrincipal;
        
        if (debt.currentBalance === 0 && debt.payoffMonth === 0) {
          debt.payoffMonth = month;
          // Roll minimum payment into extra payment for next debt
          availableExtra += debt.minimumPayment;
        }
      }
    }
    
    const totalBalance = workingDebts.reduce((sum, d) => sum + d.currentBalance, 0);
    monthlyProgress.push({
      month,
      totalBalance,
      totalPaid,
      interestPaid: totalInterestPaid
    });
  }
  
  const originalTotal = sortedDebts.reduce((sum, d) => sum + d.balance, 0);
  
  return {
    totalMonths: month,
    totalInterest: totalInterestPaid,
    totalPayment: originalTotal + totalInterestPaid,
    debts: workingDebts.map(d => ({
      name: d.name,
      originalBalance: d.balance,
      payoffMonth: d.payoffMonth,
      totalInterest: d.totalInterest
    })),
    monthlyProgress
  };
}

/**
 * Compare snowball vs avalanche methods
 */
export function comparePayoffMethods(
  debts: Debt[],
  extraPayment: number
): {
  snowball: DebtPayoffPlan;
  avalanche: DebtPayoffPlan;
  interestDifference: number;
  timeDifference: number;
} {
  const snowball = calculateDebtSnowball(debts, extraPayment);
  const avalanche = calculateDebtAvalanche(debts, extraPayment);
  
  return {
    snowball,
    avalanche,
    interestDifference: snowball.totalInterest - avalanche.totalInterest,
    timeDifference: snowball.totalMonths - avalanche.totalMonths
  };
}

