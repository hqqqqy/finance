"use client";

import { useState } from "react";
import Link from "next/link";
import { Receipt, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateIncomeTax } from "@/lib/finance/income-tax";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function IncomeTaxCalculator() {
  const [grossIncome, setGrossIncome] = useState("75000");
  const [federalRate, setFederalRate] = useState("22");
  const [stateRate, setStateRate] = useState("5");
  const [result, setResult] = useState<ReturnType<typeof calculateIncomeTax> | null>(null);

  const calculate = () => {
    const r = calculateIncomeTax(parseFloat(grossIncome) || 0, (parseFloat(federalRate) || 0) / 100, (parseFloat(stateRate) || 0) / 100);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="violet">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Income Tax Calculator" description="Calculate federal and state income taxes" icon={Receipt} badgeText="Tax"
          features={[{ icon: CheckCircle2, text: "Federal & State" }, { icon: Calculator, text: "Effective Rate" }, { icon: Receipt, text: "Net Income" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Enter Income Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="grossIncome">Gross Annual Income ($)</Label><Input id="grossIncome" type="number" value={grossIncome} onChange={(e) => setGrossIncome(e.target.value)} placeholder="75000" min="0" step="1000" /></div>
              <div><Label htmlFor="federalRate">Federal Tax Rate (%)</Label><Input id="federalRate" type="number" value={federalRate} onChange={(e) => setFederalRate(e.target.value)} placeholder="22" min="0" max="50" step="1" /></div>
              <div><Label htmlFor="stateRate">State Tax Rate (%)</Label><Input id="stateRate" type="number" value={stateRate} onChange={(e) => setStateRate(e.target.value)} placeholder="5" min="0" max="15" step="0.5" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-violet-600 hover:bg-violet-700"><Calculator className="mr-2 w-4 h-4" />Calculate Tax</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Tax Calculation">
            <div className="grid md:grid-cols-4 gap-4">
              <ResultItem label="Federal Tax" value={formatCurrency(result.federalTax)} color="violet" />
              <ResultItem label="State Tax" value={formatCurrency(result.stateTax)} color="violet" />
              <ResultItem label="Total Tax" value={formatCurrency(result.totalTax)} color="amber" />
              <ResultItem label="Net Income" value={formatCurrency(result.netIncome)} color="emerald" />
            </div>
            <div className="mt-4 p-4 bg-violet-50 dark:bg-violet-950 rounded-lg">
              <p className="text-sm font-semibold">Effective Tax Rate: {formatPercent(result.effectiveRate)}</p>
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/tax-bracket-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Tax Bracket Calculator</h3><p className="text-sm text-muted-foreground">Find your tax bracket</p></Link>
            <Link href="/calculator/capital-gains-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Capital Gains Calculator</h3><p className="text-sm text-muted-foreground">Investment tax</p></Link>
            <Link href="/calculator/paycheck-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Paycheck Calculator</h3><p className="text-sm text-muted-foreground">Take-home pay</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

