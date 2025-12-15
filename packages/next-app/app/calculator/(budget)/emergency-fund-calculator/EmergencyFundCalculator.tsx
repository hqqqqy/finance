"use client";

import { useState } from "react";
import Link from "next/link";
import { PiggyBank, Calculator, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateEmergencyFund } from "@/lib/finance/emergency-fund";
import { formatCurrency } from "@/lib/finance/utils";

export default function EmergencyFundCalculator() {
  const [monthlyExpenses, setMonthlyExpenses] = useState("3000");
  const [currentSavings, setCurrentSavings] = useState("5000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [targetMonths, setTargetMonths] = useState("6");
  const [result, setResult] = useState<ReturnType<typeof calculateEmergencyFund> | null>(null);

  const calculate = () => {
    const r = calculateEmergencyFund(parseFloat(monthlyExpenses) || 0, parseFloat(currentSavings) || 0, parseFloat(monthlyContribution) || 0, parseFloat(targetMonths) || 6);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="cyan">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Emergency Fund Calculator" description="Build your financial safety net" icon={Shield} badgeText="Budget"
          features={[{ icon: CheckCircle2, text: "Financial Safety" }, { icon: Calculator, text: "Target Planning" }, { icon: PiggyBank, text: "Save Smart" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Calculate Your Emergency Fund</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="monthlyExpenses">Monthly Expenses ($)</Label><Input id="monthlyExpenses" type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} placeholder="3000" min="0" step="100" /></div>
              <div><Label htmlFor="currentSavings">Current Emergency Fund ($)</Label><Input id="currentSavings" type="number" value={currentSavings} onChange={(e) => setCurrentSavings(e.target.value)} placeholder="5000" min="0" step="1000" /></div>
              <div><Label htmlFor="monthlyContribution">Monthly Contribution ($)</Label><Input id="monthlyContribution" type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="500" min="0" step="10" /></div>
              <div><Label htmlFor="targetMonths">Target Months of Expenses</Label><Input id="targetMonths" type="number" value={targetMonths} onChange={(e) => setTargetMonths(e.target.value)} placeholder="6" min="1" max="12" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-cyan-600 hover:bg-cyan-700"><Calculator className="mr-2 w-4 h-4" />Calculate Emergency Fund</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Emergency Fund Plan">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Recommended Fund" value={formatCurrency(result.recommendedFund)} color="cyan" />
              <ResultItem label="Amount Needed" value={formatCurrency(result.amountNeeded)} color="amber" />
              <ResultItem label="Months to Save" value={result.monthsToSave.toString()} color="blue" />
            </div>
            <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
              <p className="text-sm font-semibold">🛡️ Current Coverage: {result.monthsCovered.toFixed(1)} months of expenses</p>
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/savings-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Savings Calculator</h3><p className="text-sm text-muted-foreground">Reach savings goals</p></Link>
            <Link href="/calculator/budget-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Budget Calculator</h3><p className="text-sm text-muted-foreground">Plan your budget</p></Link>
            <Link href="/calculator/net-worth-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Net Worth Calculator</h3><p className="text-sm text-muted-foreground">Track your wealth</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

