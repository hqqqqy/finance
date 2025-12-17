"use client";

import { useState } from "react";
import Link from "next/link";
import { PiggyBank, Calculator, CheckCircle2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateNetWorth } from "@/lib/finance/net-worth";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function NetWorthCalculator() {
  const [cash, setCash] = useState("10000");
  const [investments, setInvestments] = useState("50000");
  const [retirement, setRetirement] = useState("100000");
  const [realEstate, setRealEstate] = useState("300000");
  const [vehicles, setVehicles] = useState("25000");
  const [otherAssets, setOtherAssets] = useState("5000");
  const [mortgage, setMortgage] = useState("250000");
  const [loans, setLoans] = useState("15000");
  const [creditCards, setCreditCards] = useState("5000");
  const [otherLiabilities, setOtherLiabilities] = useState("0");
  const [result, setResult] = useState<ReturnType<typeof calculateNetWorth> | null>(null);

  const calculate = () => {
    const r = calculateNetWorth(parseFloat(cash)||0, parseFloat(investments)||0, parseFloat(retirement)||0, parseFloat(realEstate)||0, parseFloat(vehicles)||0, parseFloat(otherAssets)||0, parseFloat(mortgage)||0, parseFloat(loans)||0, parseFloat(creditCards)||0, parseFloat(otherLiabilities)||0);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="cyan">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Net Worth Calculator" description="Track your total wealth and financial progress" icon={TrendingUp} badgeText="Budget"
          features={[{ icon: CheckCircle2, text: "Total Wealth" }, { icon: Calculator, text: "Assets & Liabilities" }, { icon: PiggyBank, text: "Track Progress" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Assets & Liabilities</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><h3 className="font-semibold mb-2">Assets</h3><div className="grid md:grid-cols-2 gap-4">
              <div><Label>Cash & Savings ($)</Label><Input type="number" value={cash} onChange={(e) => setCash(e.target.value)} /></div>
              <div><Label>Investments ($)</Label><Input type="number" value={investments} onChange={(e) => setInvestments(e.target.value)} /></div>
              <div><Label>Retirement Accounts ($)</Label><Input type="number" value={retirement} onChange={(e) => setRetirement(e.target.value)} /></div>
              <div><Label>Real Estate ($)</Label><Input type="number" value={realEstate} onChange={(e) => setRealEstate(e.target.value)} /></div>
              <div><Label>Vehicles ($)</Label><Input type="number" value={vehicles} onChange={(e) => setVehicles(e.target.value)} /></div>
              <div><Label>Other Assets ($)</Label><Input type="number" value={otherAssets} onChange={(e) => setOtherAssets(e.target.value)} /></div>
            </div></div>
            <div><h3 className="font-semibold mb-2">Liabilities</h3><div className="grid md:grid-cols-2 gap-4">
              <div><Label>Mortgage ($)</Label><Input type="number" value={mortgage} onChange={(e) => setMortgage(e.target.value)} /></div>
              <div><Label>Loans ($)</Label><Input type="number" value={loans} onChange={(e) => setLoans(e.target.value)} /></div>
              <div><Label>Credit Cards ($)</Label><Input type="number" value={creditCards} onChange={(e) => setCreditCards(e.target.value)} /></div>
              <div><Label>Other Liabilities ($)</Label><Input type="number" value={otherLiabilities} onChange={(e) => setOtherLiabilities(e.target.value)} /></div>
            </div></div>
            <Button onClick={calculate} className="w-full bg-cyan-600 hover:bg-cyan-700"><Calculator className="mr-2 w-4 h-4" />Calculate Net Worth</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Your Net Worth">
            <div className="grid md:grid-cols-4 gap-4">
              <ResultItem label="Total Assets" value={formatCurrency(result.totalAssets)} color="emerald" />
              <ResultItem label="Total Liabilities" value={formatCurrency(result.totalLiabilities)} color="amber" />
              <ResultItem label="Net Worth" value={formatCurrency(result.netWorth)} color={result.netWorth >= 0 ? "emerald" : "amber"} />
              <ResultItem label="Liquidity Ratio" value={formatPercent(result.liquidityRatio)} color="blue" />
            </div>
            <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
              <p className="text-sm font-semibold">💎 Net Worth Category: {result.netWorthCategory}</p>
              <p className="text-xs mt-1">Liquid Assets: {formatCurrency(result.liquidAssets)}</p>
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/budget-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Budget Calculator</h3><p className="text-sm text-muted-foreground">Plan your budget</p></Link>
            <Link href="/calculator/fire-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">FIRE Calculator</h3><p className="text-sm text-muted-foreground">Financial independence</p></Link>
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Compound Interest</h3><p className="text-sm text-muted-foreground">Grow your wealth</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

