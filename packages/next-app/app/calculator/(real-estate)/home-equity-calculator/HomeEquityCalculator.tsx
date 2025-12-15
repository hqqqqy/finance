"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateHomeEquity } from "@/lib/finance/home-equity";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function HomeEquityCalculator() {
  const [homeValue, setHomeValue] = useState("500000");
  const [mortgageBalance, setMortgageBalance] = useState("300000");
  const [result, setResult] = useState<ReturnType<typeof calculateHomeEquity> | null>(null);

  const calculate = () => {
    const r = calculateHomeEquity(parseFloat(homeValue)||0, parseFloat(mortgageBalance)||0);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="green">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Home Equity Calculator" description="Calculate your home equity and LTV ratio" icon={Home} badgeText="Real Estate"
          features={[{ icon: CheckCircle2, text: "Equity %" }, { icon: Calculator, text: "LTV Ratio" }, { icon: Home, text: "Net Worth" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Calculate Home Equity</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="homeValue">Current Home Value ($)</Label><Input id="homeValue" type="number" value={homeValue} onChange={(e) => setHomeValue(e.target.value)} placeholder="500000" min="0" step="10000" /></div>
              <div><Label htmlFor="mortgageBalance">Mortgage Balance ($)</Label><Input id="mortgageBalance" type="number" value={mortgageBalance} onChange={(e) => setMortgageBalance(e.target.value)} placeholder="300000" min="0" step="1000" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700"><Calculator className="mr-2 w-4 h-4" />Calculate Equity</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Your Home Equity">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Home Equity" value={formatCurrency(result.homeEquity)} color="emerald" />
              <ResultItem label="Equity %" value={formatPercent(result.equityPercent)} color="green" />
              <ResultItem label="Loan-to-Value" value={formatPercent(result.loanToValue)} color="blue" />
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/mortgage-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Mortgage Calculator</h3><p className="text-sm text-muted-foreground">Calculate payments</p></Link>
            <Link href="/calculator/refinance-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Refinance Calculator</h3><p className="text-sm text-muted-foreground">Should you refinance?</p></Link>
            <Link href="/calculator/net-worth-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Net Worth Calculator</h3><p className="text-sm text-muted-foreground">Track wealth</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

