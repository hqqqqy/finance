"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Calculator, CheckCircle2, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateRefinance } from "@/lib/finance/refinance";
import { formatCurrency } from "@/lib/finance/utils";
import { FormulaCard } from "@/components/ui/math-formula";

export default function RefinanceCalculator() {
  const [currentBalance, setCurrentBalance] = useState("250000");
  const [currentRate, setCurrentRate] = useState("5.5");
  const [remainingYears, setRemainingYears] = useState("25");
  const [newRate, setNewRate] = useState("4.0");
  const [newTerm, setNewTerm] = useState("25");
  const [closingCosts, setClosingCosts] = useState("3000");
  const [result, setResult] = useState<ReturnType<typeof calculateRefinance> | null>(null);

  const calculate = () => {
    const balance = parseFloat(currentBalance) || 0;
    const currentR = (parseFloat(currentRate) || 0) / 100;
    const remaining = parseFloat(remainingYears) || 0;
    const newR = (parseFloat(newRate) || 0) / 100;
    const newT = parseFloat(newTerm) || 0;
    const costs = parseFloat(closingCosts) || 0;

    if (balance <= 0 || remaining <= 0 || newT <= 0) {
      alert("Please enter valid values");
      return;
    }

    const calculatedResult = calculateRefinance(balance, currentR, remaining, newR, newT, costs);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Refinance Calculator"
          description="Should you refinance your loan? Find out if it saves money"
          icon={RefreshCw}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "Savings Analysis" },
            { icon: Calculator, text: "Break-Even Point" },
            { icon: CreditCard, text: "Smart Decision" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader><CardTitle>Compare Current vs New Loan</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentBalance">Current Loan Balance ($)</Label>
                <Input id="currentBalance" type="number" value={currentBalance} onChange={(e) => setCurrentBalance(e.target.value)}
                  placeholder="250000" min="0" step="1000" />
              </div>
              <div>
                <Label htmlFor="currentRate">Current Interest Rate (%)</Label>
                <Input id="currentRate" type="number" value={currentRate} onChange={(e) => setCurrentRate(e.target.value)}
                  placeholder="5.5" min="0" max="20" step="0.1" />
              </div>
              <div>
                <Label htmlFor="remainingYears">Remaining Term (Years)</Label>
                <Input id="remainingYears" type="number" value={remainingYears} onChange={(e) => setRemainingYears(e.target.value)}
                  placeholder="25" min="1" max="30" />
              </div>
              <div>
                <Label htmlFor="newRate">New Interest Rate (%)</Label>
                <Input id="newRate" type="number" value={newRate} onChange={(e) => setNewRate(e.target.value)}
                  placeholder="4.0" min="0" max="20" step="0.1" />
              </div>
              <div>
                <Label htmlFor="newTerm">New Loan Term (Years)</Label>
                <Input id="newTerm" type="number" value={newTerm} onChange={(e) => setNewTerm(e.target.value)}
                  placeholder="25" min="1" max="30" />
              </div>
              <div>
                <Label htmlFor="closingCosts">Closing Costs ($)</Label>
                <Input id="closingCosts" type="number" value={closingCosts} onChange={(e) => setClosingCosts(e.target.value)}
                  placeholder="3000" min="0" step="100" />
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Refinance
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Refinance Analysis">
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <ResultItem label="Monthly Savings" value={formatCurrency(result.monthlySavings)} color="emerald" />
                <ResultItem label="Total Savings" value={formatCurrency(result.totalSavings)} color="blue" />
                <ResultItem label="Break-Even" value={`${Math.ceil(result.breakEvenMonths)} months`} color="amber" />
              </div>
              {result.shouldRefinance ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    ✅ Refinancing looks beneficial! You'll save {formatCurrency(result.totalSavings)} over the loan term.
                  </p>
                </div>
              ) : (
                <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                    ❌ Refinancing may not be worth it based on these numbers.
                  </p>
                </div>
              )}
            </ResultCard>
          </>
        )}

        <FormulaCard
          title="Refinance Break-Even Point"
          description="Calculate when refinancing costs are recovered"
          formula="Break\ Even = \frac{Closing\ Costs}{Monthly\ Savings}"
          variables={[
            { symbol: "Break Even", description: "Months to recover costs" },
            { symbol: "Closing Costs", description: "Total refinancing fees" },
            { symbol: "Monthly Savings", description: "Payment reduction per month" }
          ]}
          example="$3,000 closing costs ÷ $150 monthly savings = 20 months to break even"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/mortgage-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Mortgage Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate mortgage payment</p>
            </Link>
            <Link href="/calculator/loan-payoff-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Loan Payoff Calculator</h3>
              <p className="text-sm text-muted-foreground">Pay off loans faster</p>
            </Link>
            <Link href="/calculator/mortgage-affordability-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Affordability Calculator</h3>
              <p className="text-sm text-muted-foreground">How much can you afford?</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Refinancing</h3>
            <p className="text-muted-foreground mb-3">Make informed refinancing decisions.</p>
            <Link href="/learn" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

