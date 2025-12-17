"use client";

import { useState } from "react";
import Link from "next/link";
import { Receipt, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateCapitalGains } from "@/lib/finance/capital-gains";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function CapitalGainsCalculator() {
  const [purchasePrice, setPurchasePrice] = useState("10000");
  const [salePrice, setSalePrice] = useState("15000");
  const [holdingPeriod, setHoldingPeriod] = useState("long");
  const [taxRate, setTaxRate] = useState("15");
  const [result, setResult] = useState<ReturnType<typeof calculateCapitalGains> | null>(null);

  const calculate = () => {
    const r = calculateCapitalGains(parseFloat(purchasePrice) || 0, parseFloat(salePrice) || 0, holdingPeriod as any, (parseFloat(taxRate) || 0) / 100);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="violet">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Capital Gains Tax Calculator" description="Calculate tax on investment gains" icon={Receipt} badgeText="Tax"
          features={[{ icon: CheckCircle2, text: "Long & Short Term" }, { icon: Calculator, text: "Net Profit" }, { icon: Receipt, text: "Tax Owed" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Investment Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="purchasePrice">Purchase Price ($)</Label><Input id="purchasePrice" type="number" value={purchasePrice} onChange={(e) => setPurchasePrice(e.target.value)} placeholder="10000" min="0" step="100" /></div>
              <div><Label htmlFor="salePrice">Sale Price ($)</Label><Input id="salePrice" type="number" value={salePrice} onChange={(e) => setSalePrice(e.target.value)} placeholder="15000" min="0" step="100" /></div>
              <div><Label htmlFor="holdingPeriod">Holding Period</Label><Select value={holdingPeriod} onValueChange={setHoldingPeriod}><SelectTrigger id="holdingPeriod"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="short">Short-term (&lt;1 year)</SelectItem><SelectItem value="long">Long-term (&gt;1 year)</SelectItem></SelectContent></Select></div>
              <div><Label htmlFor="taxRate">Tax Rate (%)</Label><Input id="taxRate" type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} placeholder="15" min="0" max="50" step="1" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-violet-600 hover:bg-violet-700"><Calculator className="mr-2 w-4 h-4" />Calculate Capital Gains</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Capital Gains Tax">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Capital Gain" value={formatCurrency(result.capitalGain)} color="emerald" />
              <ResultItem label="Tax Owed" value={formatCurrency(result.taxOwed)} color="amber" />
              <ResultItem label="Net Profit" value={formatCurrency(result.netProfit)} color="violet" />
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/stock-return-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Stock Return Calculator</h3><p className="text-sm text-muted-foreground">Investment returns</p></Link>
            <Link href="/calculator/crypto-profit-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Crypto Profit Calculator</h3><p className="text-sm text-muted-foreground">Crypto gains</p></Link>
            <Link href="/calculator/income-tax-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Income Tax Calculator</h3><p className="text-sm text-muted-foreground">Income taxes</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

