"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateAffordability } from "@/lib/finance/affordability";
import { formatCurrency } from "@/lib/finance/utils";

export default function MortgageAffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState("75000");
  const [monthlyDebts, setMonthlyDebts] = useState("500");
  const [downPaymentPercent, setDownPaymentPercent] = useState("20");
  const [interestRate, setInterestRate] = useState("6.5");
  const [result, setResult] = useState<ReturnType<typeof calculateAffordability> | null>(null);

  const calculate = () => {
    const r = calculateAffordability(parseFloat(annualIncome)||0, parseFloat(monthlyDebts)||0, (parseFloat(downPaymentPercent)||0)/100, (parseFloat(interestRate)||0)/100);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="green">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Mortgage Affordability Calculator" description="How much house can you afford?" icon={Home} badgeText="Real Estate"
          features={[{ icon: CheckCircle2, text: "Income Based" }, { icon: Calculator, text: "Debt Ratio" }, { icon: Home, text: "Max Price" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Calculate Affordability</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="annualIncome">Annual Income ($)</Label><Input id="annualIncome" type="number" value={annualIncome} onChange={(e) => setAnnualIncome(e.target.value)} placeholder="75000" min="0" step="1000" /></div>
              <div><Label htmlFor="monthlyDebts">Monthly Debts ($)</Label><Input id="monthlyDebts" type="number" value={monthlyDebts} onChange={(e) => setMonthlyDebts(e.target.value)} placeholder="500" min="0" step="50" /></div>
              <div><Label htmlFor="downPaymentPercent">Down Payment (%)</Label><Input id="downPaymentPercent" type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(e.target.value)} placeholder="20" min="0" max="100" step="1" /></div>
              <div><Label htmlFor="interestRate">Interest Rate (%)</Label><Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="6.5" min="0" max="15" step="0.1" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700"><Calculator className="mr-2 w-4 h-4" />Calculate Affordability</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="You Can Afford">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Max Home Price" value={formatCurrency(result.maxHomePrice)} color="emerald" />
              <ResultItem label="Max Loan Amount" value={formatCurrency(result.maxLoanAmount)} color="blue" />
              <ResultItem label="Monthly Payment" value={formatCurrency(result.monthlyPayment)} color="amber" />
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/mortgage-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Mortgage Calculator</h3><p className="text-sm text-muted-foreground">Monthly payments</p></Link>
            <Link href="/calculator/rent-vs-buy-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Rent vs Buy</h3><p className="text-sm text-muted-foreground">Should you buy?</p></Link>
            <Link href="/calculator/closing-cost-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Closing Costs</h3><p className="text-sm text-muted-foreground">Total costs</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}


