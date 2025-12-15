"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateRentVsBuy } from "@/lib/finance/rent-vs-buy";
import { formatCurrency } from "@/lib/finance/utils";

export default function RentVsBuyCalculator() {
  const [rentMonthly, setRentMonthly] = useState("2000");
  const [homePrice, setHomePrice] = useState("400000");
  const [downPayment, setDownPayment] = useState("80000");
  const [mortgageRate, setMortgageRate] = useState("6.5");
  const [years, setYears] = useState("10");
  const [result, setResult] = useState<ReturnType<typeof calculateRentVsBuy> | null>(null);

  const calculate = () => {
    const r = calculateRentVsBuy(parseFloat(rentMonthly)||0, parseFloat(homePrice)||0, parseFloat(downPayment)||0, (parseFloat(mortgageRate)||0)/100, parseFloat(years)||0);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="green">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Rent vs Buy Calculator" description="Should you rent or buy a home?" icon={Home} badgeText="Real Estate"
          features={[{ icon: CheckCircle2, text: "Cost Comparison" }, { icon: Calculator, text: "Break-Even" }, { icon: Home, text: "Smart Decision" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Compare Renting vs Buying</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="rentMonthly">Monthly Rent ($)</Label><Input id="rentMonthly" type="number" value={rentMonthly} onChange={(e) => setRentMonthly(e.target.value)} placeholder="2000" min="0" step="100" /></div>
              <div><Label htmlFor="homePrice">Home Price ($)</Label><Input id="homePrice" type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="400000" min="0" step="10000" /></div>
              <div><Label htmlFor="downPayment">Down Payment ($)</Label><Input id="downPayment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} placeholder="80000" min="0" step="1000" /></div>
              <div><Label htmlFor="mortgageRate">Mortgage Rate (%)</Label><Input id="mortgageRate" type="number" value={mortgageRate} onChange={(e) => setMortgageRate(e.target.value)} placeholder="6.5" min="0" max="15" step="0.1" /></div>
              <div><Label htmlFor="years">Time Period (Years)</Label><Input id="years" type="number" value={years} onChange={(e) => setYears(e.target.value)} placeholder="10" min="1" max="30" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-green-600 hover:bg-green-700"><Calculator className="mr-2 w-4 h-4" />Calculate</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Rent vs Buy Comparison">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Total Rent Cost" value={formatCurrency(result.totalRentCost)} color="blue" />
              <ResultItem label="Total Buy Cost" value={formatCurrency(result.totalBuyCost)} color="green" />
              <ResultItem label="Recommendation" value={result.recommendation === "buy" ? "Buy" : "Rent"} color={result.recommendation === "buy" ? "emerald" : "amber"} />
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/mortgage-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Mortgage Calculator</h3><p className="text-sm text-muted-foreground">Calculate mortgage payments</p></Link>
            <Link href="/calculator/mortgage-affordability-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Affordability Calculator</h3><p className="text-sm text-muted-foreground">How much can you afford?</p></Link>
            <Link href="/calculator/closing-cost-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Closing Cost Calculator</h3><p className="text-sm text-muted-foreground">Calculate closing costs</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

