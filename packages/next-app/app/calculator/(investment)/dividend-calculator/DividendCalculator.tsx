"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, DollarSign, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateDividend } from "@/lib/finance/dividend";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function DividendCalculator() {
  const [shares, setShares] = useState("100");
  const [pricePerShare, setPricePerShare] = useState("50");
  const [dividendPerShare, setDividendPerShare] = useState("2");
  const [dividendGrowth, setDividendGrowth] = useState("5");
  const [stockGrowth, setStockGrowth] = useState("7");
  const [years, setYears] = useState("10");
  const [reinvest, setReinvest] = useState("true");
  const [result, setResult] = useState<ReturnType<typeof calculateDividend> | null>(null);

  const calculate = () => {
    const numShares = parseFloat(shares) || 0;
    const price = parseFloat(pricePerShare) || 0;
    const dividend = parseFloat(dividendPerShare) || 0;
    const divGrowth = (parseFloat(dividendGrowth) || 0) / 100;
    const stockGr = (parseFloat(stockGrowth) || 0) / 100;
    const time = parseFloat(years) || 10;
    const shouldReinvest = reinvest === "true";

    if (numShares <= 0 || price <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const calculatedResult = calculateDividend(numShares, price, dividend, divGrowth, stockGr, time, shouldReinvest);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="emerald">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Dividend Calculator"
          description="Calculate dividend income and growth potential"
          icon={TrendingUp}
          badgeText="Investment"
          features={[
            { icon: CheckCircle2, text: "Yield Analysis" },
            { icon: DollarSign, text: "Growth Projections" },
            { icon: Calculator, text: "DRIP Planning" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Investment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="shares">Number of Shares</Label>
                <Input id="shares" type="number" value={shares} onChange={(e) => setShares(e.target.value)}
                  placeholder="100" min="0" step="1" />
              </div>
              <div>
                <Label htmlFor="pricePerShare">Price per Share ($)</Label>
                <Input id="pricePerShare" type="number" value={pricePerShare} onChange={(e) => setPricePerShare(e.target.value)}
                  placeholder="50" min="0" step="0.01" />
              </div>
              <div>
                <Label htmlFor="dividendPerShare">Annual Dividend per Share ($)</Label>
                <Input id="dividendPerShare" type="number" value={dividendPerShare} onChange={(e) => setDividendPerShare(e.target.value)}
                  placeholder="2" min="0" step="0.01" />
              </div>
              <div>
                <Label htmlFor="dividendGrowth">Dividend Growth Rate (%)</Label>
                <Input id="dividendGrowth" type="number" value={dividendGrowth} onChange={(e) => setDividendGrowth(e.target.value)}
                  placeholder="5" min="0" step="0.5" />
              </div>
              <div>
                <Label htmlFor="stockGrowth">Stock Price Growth Rate (%)</Label>
                <Input id="stockGrowth" type="number" value={stockGrowth} onChange={(e) => setStockGrowth(e.target.value)}
                  placeholder="7" min="0" step="0.5" />
              </div>
              <div>
                <Label htmlFor="years">Time Horizon (Years)</Label>
                <Input id="years" type="number" value={years} onChange={(e) => setYears(e.target.value)}
                  placeholder="10" min="1" max="50" />
              </div>
              <div>
                <Label htmlFor="reinvest">Reinvest Dividends?</Label>
                <Select value={reinvest} onValueChange={setReinvest}>
                  <SelectTrigger id="reinvest"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Yes (DRIP)</SelectItem>
                    <SelectItem value="false">No (Cash)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Dividends
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Dividend Income Analysis">
              <div className="grid md:grid-cols-4 gap-4">
                <ResultItem label="Current Annual Dividend" value={formatCurrency(result.annualDividend)} color="emerald" />
                <ResultItem label="Monthly Dividend" value={formatCurrency(result.monthlyDividend)} color="blue" />
                <ResultItem label="Dividend Yield" value={formatPercent(result.dividendYield)} color="purple" />
                <ResultItem label="Total Investment" value={formatCurrency(result.totalInvestment)} color="amber" />
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    Future Annual Dividend: {formatCurrency(result.futureDividend)}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                    Future Portfolio Value: {formatCurrency(result.futureValue)}
                  </p>
                </div>
              </div>
            </ResultCard>

            {result.yearlyBreakdown && result.yearlyBreakdown.length > 0 && (
              <Card className="mb-8">
                <CardHeader><CardTitle>Dividend Growth Projection</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={result.yearlyBreakdown}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                      <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                      <Legend />
                      <Area type="monotone" dataKey="stockValue" stroke="#10b981" fill="#10b981" name="Stock Value" />
                      <Area type="monotone" dataKey="annualDividend" stroke="#3b82f6" fill="#3b82f6" name="Annual Dividend" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </>
        )}

        <FormulaCard
          title="Dividend Yield Formula"
          description="Calculate the annual dividend income relative to stock price"
          formula="Dividend\ Yield = \frac{Annual\ Dividend\ per\ Share}{Price\ per\ Share} \times 100"
          variables={[
            { symbol: "Dividend Yield", description: "Annual return from dividends as a percentage" },
            { symbol: "Annual Dividend per Share", description: "Total dividends paid per share annually" },
            { symbol: "Price per Share", description: "Current stock price" }
          ]}
          example="A stock paying $2/share annual dividend at $50/share = 4% dividend yield"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/stock-return-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Stock Return Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate total stock returns</p>
            </Link>
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Compound Interest Calculator</h3>
              <p className="text-sm text-muted-foreground">See investment growth</p>
            </Link>
            <Link href="/calculator/fire-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">FIRE Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan passive income retirement</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Dividend Investing</h3>
            <p className="text-muted-foreground mb-3">Build passive income with dividend stocks.</p>
            <Link href="/learn" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

