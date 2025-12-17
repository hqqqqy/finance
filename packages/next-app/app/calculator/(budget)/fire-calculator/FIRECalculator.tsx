"use client";

import { useState } from "react";
import Link from "next/link";
import { PiggyBank, Calculator, CheckCircle2, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateFIRE } from "@/lib/finance/fire";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function FIRECalculator() {
  const [currentAge, setCurrentAge] = useState("30");
  const [currentNetWorth, setCurrentNetWorth] = useState("100000");
  const [annualIncome, setAnnualIncome] = useState("75000");
  const [annualExpenses, setAnnualExpenses] = useState("40000");
  const [annualSavings, setAnnualSavings] = useState("35000");
  const [expectedReturn, setExpectedReturn] = useState("7");
  const [result, setResult] = useState<ReturnType<typeof calculateFIRE> | null>(null);

  const calculate = () => {
    const r = calculateFIRE(parseFloat(currentAge)||0, parseFloat(currentNetWorth)||0, parseFloat(annualIncome)||0, parseFloat(annualExpenses)||0, parseFloat(annualSavings)||0, (parseFloat(expectedReturn)||0)/100);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="cyan">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="FIRE Calculator" description="Calculate your path to Financial Independence, Retire Early" icon={Target} badgeText="Budget"
          features={[{ icon: CheckCircle2, text: "FIRE Number" }, { icon: Calculator, text: "Years to FI" }, { icon: PiggyBank, text: "4% Rule" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Your FIRE Journey</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="currentAge">Current Age</Label><Input id="currentAge" type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="30" min="18" max="80" /></div>
              <div><Label htmlFor="currentNetWorth">Current Net Worth ($)</Label><Input id="currentNetWorth" type="number" value={currentNetWorth} onChange={(e) => setCurrentNetWorth(e.target.value)} placeholder="100000" min="0" step="10000" /></div>
              <div><Label htmlFor="annualIncome">Annual Income ($)</Label><Input id="annualIncome" type="number" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} placeholder="75000" min="0" step="1000" /></div>
              <div><Label htmlFor="annualExpenses">Annual Expenses ($)</Label><Input id="annualExpenses" type="number" value={annualExpenses} onChange={(e) => setAnnualExpenses(e.target.value)} placeholder="40000" min="0" step="1000" /></div>
              <div><Label htmlFor="annualSavings">Annual Savings ($)</Label><Input id="annualSavings" type="number" value={annualSavings} onChange={(e) => setAnnualSavings(e.target.value)} placeholder="35000" min="0" step="1000" /></div>
              <div><Label htmlFor="expectedReturn">Expected Return (%)</Label><Input id="expectedReturn" type="number" value={expectedReturn} onChange={(e) => setExpectedReturn(e.target.value)} placeholder="7" min="0" max="20" step="0.5" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-cyan-600 hover:bg-cyan-700"><Calculator className="mr-2 w-4 h-4" />Calculate FIRE</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Your FIRE Plan">
            <div className="grid md:grid-cols-4 gap-4">
              <ResultItem label="FIRE Number" value={formatCurrency(result.fireNumber)} color="emerald" />
              <ResultItem label="Years to FIRE" value={result.yearsToFire.toFixed(1)} color="emerald" />
              <ResultItem label="Retirement Age" value={result.projectedRetirementAge.toString()} color="blue" />
              <ResultItem label="Savings Rate" value={formatPercent(result.requiredSavingsRate)} color="violet" />
            </div>
            <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
              <p className="text-sm font-semibold">🎯 FIRE Date: {result.fireDate}</p>
              <p className="text-xs mt-1">Current Progress: {formatPercent(result.currentProgress)}</p>
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/401k-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">401k Calculator</h3><p className="text-sm text-muted-foreground">Retirement savings</p></Link>
            <Link href="/calculator/net-worth-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Net Worth Calculator</h3><p className="text-sm text-muted-foreground">Track wealth</p></Link>
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Compound Interest</h3><p className="text-sm text-muted-foreground">Investment growth</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

