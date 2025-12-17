"use client";

import { useState } from "react";
import Link from "next/link";
import { PiggyBank, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateSavingsGoal } from "@/lib/finance/savings";
import { formatCurrency } from "@/lib/finance/utils";

export default function SavingsCalculator() {
  const [targetAmount, setTargetAmount] = useState("20000");
  const [currentSavings, setCurrentSavings] = useState("5000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [interestRate, setInterestRate] = useState("3");
  const [result, setResult] = useState<ReturnType<typeof calculateSavingsGoal> | null>(null);

  const calculate = () => {
    const target = parseFloat(targetAmount) || 0;
    const current = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyContribution) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    
    if (target <= current) {
      alert("Target must be greater than current savings");
      return;
    }
    
    const r = calculateSavingsGoal(target, current, monthly, rate);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="cyan">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Savings Calculator"
          description="Calculate when you'll reach your savings goal"
          icon={PiggyBank}
          badgeText="Budget"
          features={[
            { icon: CheckCircle2, text: "Goal Planning" },
            { icon: Calculator, text: "Time to Goal" },
            { icon: PiggyBank, text: "Interest Growth" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader><CardTitle>Enter Savings Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="targetAmount">Savings Goal ($)</Label>
                <Input id="targetAmount" type="number" value={targetAmount} onChange={(e) => setTargetAmount(e.target.value)} placeholder="20000" min="0" step="1000" /></div>
              <div><Label htmlFor="currentSavings">Current Savings ($)</Label>
                <Input id="currentSavings" type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="5000" min="0" step="1000" /></div>
              <div><Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label>
                <Input id="monthlyContribution" type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="500" min="0" step="10" /></div>
              <div><Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="3" min="0" max="20" step="0.1" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-cyan-600 hover:bg-cyan-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Savings Goal
            </Button>
          </CardContent>
        </Card>

        {result && (
          <ResultCard title="Savings Goal Timeline">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Months to Goal" value={Math.ceil(result.monthsToGoal).toString()} color="violet" />
              <ResultItem label="Years to Goal" value={result.yearsToGoal.toFixed(1)} color="blue" />
              <ResultItem label="Interest Earned" value={formatCurrency(result.interestEarned)} color="emerald" />
            </div>
            <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
              <p className="text-sm font-semibold">🎯 Target Date: {result.targetDate}</p>
            </div>
          </ResultCard>
        )}

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Compound Interest Calculator</h3>
              <p className="text-sm text-muted-foreground">See your money grow</p>
            </Link>
            <Link href="/calculator/emergency-fund-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Emergency Fund Calculator</h3>
              <p className="text-sm text-muted-foreground">Build financial safety</p>
            </Link>
            <Link href="/calculator/fire-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">FIRE Calculator</h3>
              <p className="text-sm text-muted-foreground">Financial independence</p>
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

