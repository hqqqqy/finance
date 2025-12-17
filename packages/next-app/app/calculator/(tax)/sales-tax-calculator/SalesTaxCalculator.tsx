"use client";

import { useState } from "react";
import Link from "next/link";
import { Receipt, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateSalesTax } from "@/lib/finance/sales-tax";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function SalesTaxCalculator() {
  const [preTaxAmount, setPreTaxAmount] = useState("100");
  const [taxRate, setTaxRate] = useState("8.5");
  const [result, setResult] = useState<ReturnType<typeof calculateSalesTax> | null>(null);

  const calculate = () => {
    const r = calculateSalesTax(parseFloat(preTaxAmount) || 0, (parseFloat(taxRate) || 0) / 100);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="violet">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Sales Tax Calculator" description="Calculate sales tax and total price" icon={Receipt} badgeText="Tax"
          features={[{ icon: CheckCircle2, text: "Sales Tax" }, { icon: Calculator, text: "Total Price" }, { icon: Receipt, text: "Tax Amount" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Calculate Sales Tax</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="preTaxAmount">Pre-Tax Amount ($)</Label><Input id="preTaxAmount" type="number" value={preTaxAmount} onChange={(e) => setPreTaxAmount(e.target.value)} placeholder="100" min="0" step="1" /></div>
              <div><Label htmlFor="taxRate">Sales Tax Rate (%)</Label><Input id="taxRate" type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} placeholder="8.5" min="0" max="20" step="0.1" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-violet-600 hover:bg-violet-700"><Calculator className="mr-2 w-4 h-4" />Calculate Sales Tax</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Sales Tax Calculation">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Pre-Tax Amount" value={formatCurrency(result.preTaxAmount)} color="blue" />
              <ResultItem label="Tax Amount" value={formatCurrency(result.taxAmount)} color="amber" />
              <ResultItem label="Total Amount" value={formatCurrency(result.totalAmount)} color="violet" />
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/income-tax-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Income Tax Calculator</h3><p className="text-sm text-muted-foreground">Income taxes</p></Link>
            <Link href="/calculator/budget-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Budget Calculator</h3><p className="text-sm text-muted-foreground">Plan budget</p></Link>
            <Link href="/calculator/paycheck-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Paycheck Calculator</h3><p className="text-sm text-muted-foreground">Take-home pay</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

