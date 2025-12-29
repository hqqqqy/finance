"use client";

import { useState } from "react";
import Link from "next/link";
import { Receipt, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateTaxBracket } from "@/lib/finance/tax-bracket";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function TaxBracketCalculator() {
  const [income, setIncome] = useState("75000");
  const [result, setResult] = useState<ReturnType<typeof calculateTaxBracket> | null>(null);

  const calculate = () => {
    const r = calculateTaxBracket(parseFloat(income) || 0);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="violet">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Tax Bracket Calculator" description="Find your federal tax bracket and rates" icon={Receipt} badgeText="Tax"
          features={[{ icon: CheckCircle2, text: "Tax Bracket" }, { icon: Calculator, text: "Marginal Rate" }, { icon: Receipt, text: "Effective Rate" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Calculate Your Tax Bracket</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><Label htmlFor="income">Taxable Income ($)</Label><Input id="income" type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="75000" min="0" step="1000" /></div>
            <Button onClick={calculate} className="w-full bg-violet-600 hover:bg-violet-700"><Calculator className="mr-2 w-4 h-4" />Calculate Bracket</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Your Tax Bracket">
            <div className="grid md:grid-cols-4 gap-4">
              <ResultItem label="Tax Bracket" value={result.bracket} color="violet" />
              <ResultItem label="Marginal Rate" value={`${result.marginalRate}%`} color="violet" />
              <ResultItem label="Effective Rate" value={formatPercent(result.effectiveRate)} color="blue" />
              <ResultItem label="Total Tax" value={formatCurrency(result.totalTax)} color="amber" />
            </div>
            <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
              <p className="text-sm font-semibold">Net Income: {formatCurrency(result.netIncome)}</p>
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/income-tax-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Income Tax Calculator</h3><p className="text-sm text-muted-foreground">Calculate taxes</p></Link>
            <Link href="/calculator/paycheck-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Paycheck Calculator</h3><p className="text-sm text-muted-foreground">Take-home pay</p></Link>
            <Link href="/calculator/capital-gains-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Capital Gains Calculator</h3><p className="text-sm text-muted-foreground">Investment tax</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}


