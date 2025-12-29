"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Calculator, CheckCircle2, TrendingDown, Plus, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateDebtSnowball, calculateDebtAvalanche, type Debt } from "@/lib/finance/debt-snowball";
import { formatCurrency } from "@/lib/finance/utils";
import { FormulaCard } from "@/components/ui/math-formula";

export default function DebtSnowballCalculator() {
  const [debts, setDebts] = useState<Debt[]>([
    { name: "Credit Card 1", balance: 3000, interestRate: 0.18, minimumPayment: 90 },
    { name: "Credit Card 2", balance: 8000, interestRate: 0.15, minimumPayment: 200 },
    { name: "Personal Loan", balance: 5000, interestRate: 0.10, minimumPayment: 150 }
  ]);
  const [extraPayment, setExtraPayment] = useState("200");
  const [snowballResult, setSnowballResult] = useState<ReturnType<typeof calculateDebtSnowball> | null>(null);
  const [avalancheResult, setAvalancheResult] = useState<ReturnType<typeof calculateDebtAvalanche> | null>(null);

  const addDebt = () => {
    setDebts([...debts, { name: `Debt ${debts.length + 1}`, balance: 1000, interestRate: 0.10, minimumPayment: 50 }]);
  };

  const removeDebt = (index: number) => {
    setDebts(debts.filter((_, i) => i !== index));
  };

  const updateDebt = (index: number, field: keyof Debt, value: string | number) => {
    const updated = [...debts];
    updated[index] = { ...updated[index], [field]: value };
    setDebts(updated);
  };

  const calculate = () => {
    const extra = parseFloat(extraPayment) || 0;
    
    if (debts.length === 0) {
      alert("Please add at least one debt");
      return;
    }

    const snowball = calculateDebtSnowball(debts, extra);
    const avalanche = calculateDebtAvalanche(debts, extra);
    
    setSnowballResult(snowball);
    setAvalancheResult(avalanche);
  };

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Debt Snowball Calculator"
          description="Strategic debt payoff: Snowball vs Avalanche methods"
          icon={TrendingDown}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "Multiple Debts" },
            { icon: Calculator, text: "Two Methods" },
            { icon: CreditCard, text: "Smart Strategy" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Enter Your Debts</CardTitle>
              <Button onClick={addDebt} variant="outline" size="sm">
                <Plus className="w-4 h-4 mr-1" />Add Debt
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {debts.map((debt, index) => (
              <div key={index} className="grid md:grid-cols-5 gap-2 p-4 border rounded-lg relative">
                <div>
                  <Label>Debt Name</Label>
                  <Input value={debt.name} onChange={(e) => updateDebt(index, 'name', e.target.value)} />
                </div>
                <div>
                  <Label>Balance ($)</Label>
                  <Input type="number" value={debt.balance} onChange={(e) => updateDebt(index, 'balance', parseFloat(e.target.value) || 0)} />
                </div>
                <div>
                  <Label>Rate (%)</Label>
                  <Input type="number" value={(debt.interestRate * 100).toFixed(1)} onChange={(e) => updateDebt(index, 'interestRate', (parseFloat(e.target.value) || 0) / 100)} step="0.1" />
                </div>
                <div>
                  <Label>Min Payment ($)</Label>
                  <Input type="number" value={debt.minimumPayment} onChange={(e) => updateDebt(index, 'minimumPayment', parseFloat(e.target.value) || 0)} />
                </div>
                <div className="flex items-end">
                  <Button onClick={() => removeDebt(index)} variant="destructive" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            <div>
              <Label htmlFor="extraPayment">Extra Monthly Payment ($)</Label>
              <Input id="extraPayment" type="number" value={extraPayment} onChange={(e) => setExtraPayment(e.target.value)}
                placeholder="200" min="0" step="10" />
            </div>
            
            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Payoff Plans
            </Button>
          </CardContent>
        </Card>

        {snowballResult && avalancheResult && (
          <>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <ResultCard title="Snowball Method (Smallest Balance First)">
                <div className="space-y-2">
                  <ResultItem label="Time to Debt Free" value={`${Math.floor(snowballResult.totalMonths/12)}y ${snowballResult.totalMonths%12}m`} color="amber" />
                  <ResultItem label="Total Interest" value={formatCurrency(snowballResult.totalInterest)} color="violet" />
                  <ResultItem label="Total Paid" value={formatCurrency(snowballResult.totalPayment)} color="blue" />
                </div>
              </ResultCard>
              
              <ResultCard title="Avalanche Method (Highest Rate First)">
                <div className="space-y-2">
                  <ResultItem label="Time to Debt Free" value={`${Math.floor(avalancheResult.totalMonths/12)}y ${avalancheResult.totalMonths%12}m`} color="amber" />
                  <ResultItem label="Total Interest" value={formatCurrency(avalancheResult.totalInterest)} color="violet" />
                  <ResultItem label="Total Paid" value={formatCurrency(avalancheResult.totalPayment)} color="blue" />
                </div>
              </ResultCard>
            </div>

            <Card className="mb-8">
              <CardHeader><CardTitle>Which Method is Better?</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                    <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-300">💰 Snowball: Psychological Wins</h4>
                    <p className="text-sm text-amber-700 dark:text-amber-400">
                      Pay smallest debts first. Quick wins keep you motivated. Best for those who need encouragement.
                    </p>
                  </div>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                    <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-300">📊 Avalanche: Mathematical Optimal</h4>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400">
                      Pay highest rate first. Saves {formatCurrency(Math.abs(snowballResult.totalInterest - avalancheResult.totalInterest))} more in interest. Best for disciplined savers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        <FormulaCard
          title="Debt Snowball Method"
          description="Pay off smallest balance first, roll payments to next debt"
          formula="Next\ Payment = Previous\ Minimum + Current\ Minimum + Extra"
          variables={[
            { symbol: "Next Payment", description: "Payment for next smallest debt" },
            { symbol: "Previous Minimum", description: "Minimum from paid-off debt" },
            { symbol: "Current Minimum", description: "Current debt minimum" },
            { symbol: "Extra", description: "Extra monthly payment" }
          ]}
          example="After paying off $3k debt with $90 minimum, add that $90 to next debt's payment"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/loan-payoff-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Loan Payoff Calculator</h3>
              <p className="text-sm text-muted-foreground">Single loan payoff</p>
            </Link>
            <Link href="/calculator/budget-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Budget Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your finances</p>
            </Link>
            <Link href="/calculator/emergency-fund-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Emergency Fund Calculator</h3>
              <p className="text-sm text-muted-foreground">Build financial safety</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn Debt Freedom Strategies</h3>
            <p className="text-muted-foreground mb-3">Become debt-free with proven methods.</p>
            <Link href="/learn" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}


