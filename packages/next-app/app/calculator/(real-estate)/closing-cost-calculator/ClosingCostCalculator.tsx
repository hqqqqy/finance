"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateClosingCosts } from "@/lib/finance/closing-costs";
import { formatCurrency } from "@/lib/finance/utils";

export default function ClosingCostCalculator() {
  const [homePrice, setHomePrice] = useState("400000");
  const [downPaymentPercent, setDownPaymentPercent] = useState("20");
  const [result, setResult] = useState<ReturnType<typeof calculateClosingCosts> | null>(null);

  const calculate = () => {
    const price = parseFloat(homePrice) || 0;
    const downPercent = (parseFloat(downPaymentPercent) || 0) / 100;
    const loanAmount = price * (1 - downPercent);
    const r = calculateClosingCosts(price, downPercent, loanAmount);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="green">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Closing Cost Calculator" description="Estimate your total closing costs" icon={Home} badgeText="Real Estate"
          features={[{ icon: CheckCircle2, text: "Full Breakdown" }, { icon: Calculator, text: "Accurate Estimates" }, { icon: Home, text: "Cash Needed" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Home Purchase Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="homePrice">Home Price ($)</Label><Input id="homePrice" type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="400000" min="0" step="10000" /></div>
              <div><Label htmlFor="downPaymentPercent">Down Payment (%)</Label><Input id="downPaymentPercent" type="number" value={downPaymentPercent} onChange={(e) => setDownPaymentPercent(e.target.value)} placeholder="20" min="0" max="100" step="1" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700"><Calculator className="mr-2 w-4 h-4" />Calculate Closing Costs</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Closing Cost Breakdown">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <ResultItem label="Lender Fees" value={formatCurrency(result.lenderFees)} color="blue" />
              <ResultItem label="Title Fees" value={formatCurrency(result.titleFees)} color="violet" />
              <ResultItem label="Government Fees" value={formatCurrency(result.governmentFees)} color="amber" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <ResultItem label="Prepaid Items" value={formatCurrency(result.prepaidItems)} color="blue" />
              <ResultItem label="Total Closing Costs" value={formatCurrency(result.totalClosingCosts)} color="amber" />
            </div>
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
              <p className="text-sm font-semibold text-green-800 dark:text-green-300">Total Cash Needed: {formatCurrency(result.totalCashNeeded)}</p>
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/mortgage-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Mortgage Calculator</h3><p className="text-sm text-muted-foreground">Monthly payments</p></Link>
            <Link href="/calculator/mortgage-affordability-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Affordability Calculator</h3><p className="text-sm text-muted-foreground">Can you afford it?</p></Link>
            <Link href="/calculator/rent-vs-buy-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Rent vs Buy</h3><p className="text-sm text-muted-foreground">Compare options</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}


