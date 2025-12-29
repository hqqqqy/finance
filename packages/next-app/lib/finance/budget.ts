/**
 * Budget calculator
 */

export interface BudgetResult {
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  savingsRate: number;
  budgetHealth: "surplus" | "balanced" | "deficit";
  recommendations: string[];
}

export function calculateBudget(
  income: number,
  housing: number,
  transportation: number,
  food: number,
  utilities: number,
  insurance: number,
  healthcare: number,
  savings: number,
  entertainment: number,
  other: number
): BudgetResult {
  const totalIncome = income;
  const totalExpenses = housing + transportation + food + utilities + insurance + healthcare + savings + entertainment + other;
  const netIncome = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? (savings / totalIncome) * 100 : 0;
  
  let budgetHealth: "surplus" | "balanced" | "deficit";
  if (netIncome > totalIncome * 0.05) budgetHealth = "surplus";
  else if (netIncome >= 0) budgetHealth = "balanced";
  else budgetHealth = "deficit";
  
  const recommendations: string[] = [];
  
  if (housing / totalIncome > 0.30) {
    recommendations.push("Housing costs exceed 30% of income - consider reducing");
  }
  if (savingsRate < 20) {
    recommendations.push("Try to save at least 20% of your income");
  }
  if (budgetHealth === "deficit") {
    recommendations.push("You're spending more than you earn - cut expenses or increase income");
  }
  
  return {
    totalIncome,
    totalExpenses,
    netIncome,
    savingsRate,
    budgetHealth,
    recommendations
  };
}


