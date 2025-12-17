"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculatePropertyROI } from "@/lib/finance/property-roi";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function PropertyROICalculator() {
  const [purchasePrice, setPurchasePrice] = useState("300000");
  const [downPayment, setDownPayment] = useState("60000");
  const [monthlyRent, setMonthlyRent] = useState("2500");
  const [monthlyExpenses, setMonthlyExpenses] = useState("1000");
  const [result, setResult] = useState<ReturnType<typeof calculatePropertyROI> | null>(null);

  const calculate = () => {
    const r = calculatePropertyROI(parseFloat(purchasePrice)||0, parseFloat(downPayment)||0, parseFloat(monthlyRent)||0, parseFloat(monthlyExpenses)||0);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="green">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Property ROI Calculator" description="Calculate rental property investment returns" icon={Home} badgeText="Real Estate"
          features={[{ icon: CheckCircle2, text: "ROI Analysis" }, { icon: Calculator, text: "Cap Rate" }, { icon: Home, text: "Cash Flow" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Investment Property Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="purchasePrice">Purchase Price ($)</Label><Input id="purchasePrice" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} placeholder="300000" min="0" step="10000" /></div>
              <div><Label htmlFor="downPayment">Down Payment ($)</Label><Input id="downPayment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} placeholder="60000" min="0" step="1000" /></div>
              <div><Label htmlFor="monthlyRent">Monthly Rent Income ($)</Label><Input id="monthlyRent" type="number" value={monthlyRent} onChange={(e) => setMonthlyRent(e.target.value)} placeholder="2500" min="0" step="100" /></div>
              <div><Label htmlFor="monthlyExpenses">Monthly Expenses ($)</Label><Input id="monthlyExpenses" type="number" value={monthlyExpenses} onChange={(e) => setMonthlyExpenses(e.target.value)} placeholder="1000" min="0" step="100" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700"><Calculator className="mr-2 w-4 h-4" />Calculate ROI</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Investment Returns">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Annual Cash Flow" value={formatCurrency(result.annualCashFlow)} color="emerald" />
              <ResultItem label="Cash-on-Cash Return" value={formatPercent(result.cashOnCashReturn)} color="violet" />
              <ResultItem label="Cap Rate" value={formatPercent(result.capRate)} color="blue" />
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/rent-vs-buy-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Rent vs Buy</h3><p className="text-sm text-muted-foreground">Compare options</p></Link>
            <Link href="/calculator/mortgage-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Mortgage Calculator</h3><p className="text-sm text-muted-foreground">Monthly payments</p></Link>
            <Link href="/calculator/home-equity-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Home Equity</h3><p className="text-sm text-muted-foreground">Calculate equity</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

