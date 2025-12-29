export interface RentVsBuyResult {
  totalRentCost: number;
  totalBuyCost: number;
  breakEvenYears: number;
  recommendation: "rent" | "buy";
}

export function calculateRentVsBuy(rentMonthly: number, homePrice: number, downPayment: number, mortgageRate: number, years: number): RentVsBuyResult {
  const loanAmount = homePrice - downPayment;
  const monthlyRate = mortgageRate / 12;
  const months = years * 12;
  const monthlyMortgage = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  
  const totalRentCost = rentMonthly * months;
  const totalBuyCost = downPayment + (monthlyMortgage * months);
  
  return {
    totalRentCost,
    totalBuyCost,
    breakEvenYears: totalRentCost < totalBuyCost ? 0 : years,
    recommendation: totalBuyCost < totalRentCost ? "buy" : "rent"
  };
}


